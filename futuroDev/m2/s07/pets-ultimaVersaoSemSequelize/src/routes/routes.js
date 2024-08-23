const { Router } = require('express');                  // importa o módulo express

const petsRoutes = require('./pets.routes');            // importa o módulo pets.routes.js
const vacinasRoutes = require('./vacinas.routes');
const servicosRoutes = require('./servicos.routes');

const routes = new Router();                                // cria uma instância de Router

routes.use('/pets', petsRoutes);                           // manda o routes usar o petRoutes que foi importado para gerenciar as rotas e define o prefixo /pets para as rotas do petRoutes
routes.use('/vacinas', vacinasRoutes);                     // manda o routes usar o vacinaRoutes que foi importado para gerenciar as rotas
routes.use('/servicos', servicosRoutes);                   // manda o routes usar o servicosRoutes que foi importado para gerenciar as rotas

module.exports = routes;                                   // exporta o routes para ser usado em outros módulos