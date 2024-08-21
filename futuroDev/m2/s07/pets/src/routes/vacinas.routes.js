const {Router} = require('express');

const {Pool} = require('pg');
const conexao = new Pool({ // cria a conexão com o banco de dados
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgre',
  database: 'api_pets'
})


const vacinasRoutes = new Router();


vacinasRoutes.post('/vacinas', async (req, res) => {

    try {
      const dados = req.body;
      console.log(dados);
    
      if(!dados.nome || !dados.descricao || !dados.dose) {
          res.status(400).json({mensagem: 'Dados inválidos'});
          return;
      }
      
      await conexao.query(
        `
          INSERT INTO vacinas (nome, descricao, dose) 
          VALUES ($1, $2, $3)
        `, [dados.nome, dados.descricao, dados.dose]);
    
      res.status(201).json({mensagem: 'Vacina cadastrada com sucesso!'});
      
    } catch {
      res.status(500).json({mensagem: 'Não foi possível cadastrar a vacina'});
    }
  
  });

  module.exports = vacinasRoutes;