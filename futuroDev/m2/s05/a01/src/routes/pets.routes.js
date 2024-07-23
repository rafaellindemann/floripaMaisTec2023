const {Router} = require('express');

const petsRoutes = new Router();

const {Pool} = require('pg');
const conexao = new Pool({ // cria a conexão com o banco de dados
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgre',
  database: 'api_pets'
})

const PetController = require('../controllers/PetController');


petsRoutes.get("/", async (req, res) => {
    const dados = req.query;

    if(dados.nome) {
      try {
        const pets = await conexao.query('SELECT * FROM pets where nome ilike $1', [`%${dados.nome}%`]);
        res.status(200).json(pets.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar a tabela');
      }
    }else {
      try {
        const pets = await conexao.query('SELECT * FROM pets');
        res.status(200).json(pets.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar a tabela');
      }
    }
  
  });
  
  
  // ex: localhost:3000/pets/6
  
  //TODO: se passar id que não existe ainda está retornando 204
  petsRoutes.delete('/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      await conexao.query('DELETE FROM pets WHERE id = $1', [id]);
      res.status(204).json();
    } catch {
      res.status(500).json({mensagem: 'Não foi possível excluir o pet'});
    }
  
  });

petsRoutes.post('/', PetController.criar );

  module.exports = petsRoutes;