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


petsRoutes.get("/", PetController.listar);
petsRoutes.delete('/:id', PetController.deletar);  
petsRoutes.post('/', PetController.criar );
petsRoutes.put('/:id', PetController.atualizar);

module.exports = petsRoutes;