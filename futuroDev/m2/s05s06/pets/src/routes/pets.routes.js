const {Router} = require('express');

const petsRoutes = new Router();

// const {Pool} = require('pg');
// const conexao = new Pool({ // cria a conexão com o banco de dados
//   host: 'localhost',
//   port: 5432,
//   user: 'postgres',
//   password: 'postgre',
//   database: 'api_pets'
// })

const PetController = require('../controllers/PetController');


petsRoutes.get("/", PetController.listar);
petsRoutes.delete('/:id', PetController.deletar);  
petsRoutes.post('/', PetController.criar );
petsRoutes.put('/:id', PetController.atualizar);

module.exports = petsRoutes;


// um get de um registro específico, que não fosse como o meu listar, que é um get de todos os registros ou para um dependendo da requisição, ficaria assim:
// petsRoutes.get("/:id", async (request, response) => {
//   try {
//       const id = request.params.id

//       const pet = await conexao.query("SELECT * from pets where id = $1", [id])

//       if (pet.rows.length === 0) {
//           return response.status(404).json({ mensagem: 'Não foi encontrado um pet com id' })
//       }

//       response.json(pet.rows[0])
//   } catch {
//       response.status(500).json({ mensagem: 'Não possível cadastrar o pet' })
//   }

// })