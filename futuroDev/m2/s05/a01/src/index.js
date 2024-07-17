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

    if(!dados.nome || !dados.idade || !dados.raca || !dados.tipo || !dados.responsavel) {
        // res.status(400).send('Dados inválidos');
        res.status(400).json({mensagem: 'Dados inválidos'});
        return;
    }
    
    conexao.query(
      `
        INSERT INTO pets (nome, idade, raca, tipo, responsavel) 
        VALUES ($1, $2, $3, $4, $5)
      ` ,[dados.nome, dados.idade, dados.raca, dados.tipo, dados.responsavel]);

    // res.status(201).send('Pet cadastrado com sucesso!');
    res.status(201).json({mensagem: 'Pet cadastrado com sucesso!'});
    
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
