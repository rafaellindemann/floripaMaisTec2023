const {Router} = require('express');
const petsRoutes = new Router();


petsRoutes.get("/pets", async (req, res) => {
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
  petsRoutes.delete('/pets/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      await conexao.query('DELETE FROM pets WHERE id = $1', [id]);
      res.status(204).json();
    } catch {
      res.status(500).json({mensagem: 'Não foi possível excluir o pet'});
    }
  
  });

petsRoutes.post('/pets', async (req, res) => {

    try {
      const dados = req.body;
      console.log(dados);
    
      if(!dados.nome || !dados.idade || !dados.raca || !dados.tipo || !dados.responsavel) {
          res.status(400).json({mensagem: 'Dados inválidos'});
          return;
      }
      
      await conexao.query(
        `
          INSERT INTO pets (nome, idade, raca, tipo, responsavel) 
          VALUES ($1, $2, $3, $4, $5)
        ` ,[dados.nome, dados.idade, dados.raca, dados.tipo, dados.responsavel]);
    
      res.status(201).json({mensagem: 'Pet cadastrado com sucesso!'});
      
    } catch {
      res.status(500).json({mensagem: 'Não foi possível cadastrar o pet'});
    }
  
  });

  module.exports = petsRoutes;