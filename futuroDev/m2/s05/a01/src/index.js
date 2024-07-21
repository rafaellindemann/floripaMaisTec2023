const express = require('express');
const {Pool} = require('pg');
const petsRoutes = require('./routes/pets.routes');
const vacinasRoutes = require('./routes/vacinas.routes');

const app = express();
app.use(express.json()); // habilita o server a receber json
// app.use(petRoutes); // manda o app usar o petRoutes que foi importado para gerenciar as rotas
app.use('/pets', petsRoutes); // manda o app usar o petRoutes que foi importado para gerenciar as rotas e define o prefixo /pets para as rotas do petRoutes
app.use('/vacinas', vacinasRoutes); // manda o app usar o vacinaRoutes que foi importado para gerenciar as rotas

const conexao = new Pool({ // cria a conexão com o banco de dados
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgre',
    database: 'api_pets'
})









app.get('/bemvindo', (req, res) => {
  res.send('Bem vindo então!');
});
app.get('/home', (req, res) => {
    res.send('Server tá bombando!');
  });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
