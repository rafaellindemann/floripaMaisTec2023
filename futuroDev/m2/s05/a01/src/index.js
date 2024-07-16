const express = require('express');
const {Pool} = require('pg');

const app = express();
app.use(express.json()); // habilita o server a receber json

const conexao = new Pool({ // cria a conexão com o banco de dados
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgre',
    database: 'api_pets'
})


// cadastrar - body
app.post('/pets', (req, res) => {
    const dados = req.body;
    console.log(dados);
    
    conexao.query(`
        INSERT INTO pets (nome, idade, raca, tipo, responsavel) 
        VALUES ('${dados.nome}', '${dados.idade}', '${dados.raca}', '${dados.tipo}', '${dados.responsavel}')`, 
    );
    // os values são com aspas SIMPLES
    res.send('Pet cadastrado com sucesso!');
    
    // const {nome, idade, tipo} = req.body;
    // const query = 'INSERT INTO pets (nome, idade, tipo) VALUES ($1, $2, $3)';
    // await conexao.query(query, [nome, idade, tipo]);
    // res.send('Pet cadastrado com sucesso!');
});

app.get('/bemvindo', (req, res) => {
  res.send('Bem vindo então!');
});
app.get('/home', (req, res) => {
    res.send('Server tá bombando!');
  });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
