
const {Pool} = require('pg');

const conexao = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgre',
    database: 'api_pets'
})

class ServicoController{

    async listarTodos(req, res){
        try {
            const servicos = await conexao.query('SELECT * FROM servicos');
            res.status(200).json(servicos.rows);
        } catch {
            res.status(500).json({mensagem: 'Não foi possível listar os serviços'});    
        }
    }

    async criar(req, res){

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
    }

}

module.exports = new ServicoController();