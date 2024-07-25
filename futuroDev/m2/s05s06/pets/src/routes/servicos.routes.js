const {Router} = require('express');
const {Pool} = require('pg');

const conexao = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgre',
    database: 'api_pets'
})


const servicosRoutes = new Router();

servicosRoutes.post('/', async (req, res) => {

    try {
      const dados = req.body;
      console.log(dados);
    
      if(!dados.nome ||  !dados.preco && dados.preco !== 0) { // testa os não falsy e aceita preço 0
          res.status(400).json({mensagem: 'Dados inválidos'});
          return;
      }
      
      const servico = await conexao.query(
        `
          INSERT INTO servicos 
            (nome, descricao, preco) 
            VALUES ($1, $2, $3)
            RETURNING *
        `, [dados.nome, dados.descricao, dados.preco]);
    
    //   res.status(201).json({mensagem: 'Serviço cadastrado com sucesso!'});
      res.status(201).json(servico.rows[0]); // retorna o serviço cadastrado, o 'RETURNING *' faz com que o insert retorne o registro inserido
      
    } catch {
      res.status(500).json({mensagem: 'Não foi possível cadastrar o serviço'});
    }
  
  });

  module.exports = servicosRoutes;