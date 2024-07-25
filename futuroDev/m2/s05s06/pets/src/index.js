const express = require('express');


const petsRoutes = require('./routes/pets.routes');
const vacinasRoutes = require('./routes/vacinas.routes');
const servicosRoutes = require('./routes/servicos.routes');

const app = express();
app.use(express.json()); // habilita o server a receber json
// app.use(petRoutes); // manda o app usar o petRoutes que foi importado para gerenciar as rotas
app.use('/pets', petsRoutes); // manda o app usar o petRoutes que foi importado para gerenciar as rotas e define o prefixo /pets para as rotas do petRoutes
app.use('/vacinas', vacinasRoutes); // manda o app usar o vacinaRoutes que foi importado para gerenciar as rotas
app.use('/servicos', servicosRoutes); // manda o app usar o servicosRoutes que foi importado para gerenciar as rotas






app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


//TODO: post de pets já tá no controller, falta levar os outros métodos pra lá