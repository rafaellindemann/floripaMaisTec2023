const {Router} = require('express');
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