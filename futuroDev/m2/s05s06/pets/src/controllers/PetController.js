const {Pool} = require('pg');
const conexao = new Pool({ // cria a conexão com o banco de dados
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgre',
  database: 'api_pets'
})
class PetController{

    async criar(req, res){
  
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
      
      }

    async listar(req, res){
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
    }

    //TODO: se passar id que não existe ainda está retornando 204
    async deletar(req, res){
      const id = req.params.id;
    
      try {
        await conexao.query('DELETE FROM pets WHERE id = $1', [id]);
        res.status(204).json();
      } catch {
        res.status(500).json({mensagem: 'Não foi possível excluir o pet'});
      }
    }

    async atualizar(req, res){
      try {
          const dados = req.body
          const id = req.params.id

          const dadosDoPet = await conexao.query(`
                  select * from pets
                  where id = $1
              `, [id])

          const petAtualizado = await conexao.query(`
            update pets 
            set 
            nome = $1,
            idade = $2,
            raca = $3,
            tipo = $4,
            responsavel = $5
            
            where id = $6
            returning *
          `, [
              dados.nome || dadosDoPet.rows[0].nome,
              dados.idade || dadosDoPet.rows[0].idade,
              dados.raca || dadosDoPet.rows[0].raca,
              dados.tipo || dadosDoPet.rows[0].tipo,
              dados.responsavel || dadosDoPet.rows[0].responsavel,
              id
          ])

          res.json(petAtualizado.rows[0])

      } catch (error) {
          console.log(error)
          res.status(500).json({
              mensagem: 'Houve um erro ao atualizar o pet'
          })
      }
  }
  
  }
  
  module.exports = new PetController();