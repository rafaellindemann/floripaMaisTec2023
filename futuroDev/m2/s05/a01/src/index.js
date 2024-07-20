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
app.post('/pets', async (req, res) => {

  try {
    const dados = req.body;
    console.log(dados);
  
    if(!dados.nome || !dados.idade || !dados.raca || !dados.tipo || !dados.responsavel) {
        // res.status(400).send('Dados inválidos');
        res.status(400).json({mensagem: 'Dados inválidos'});
        return;
    }
    
    await conexao.query(
      `
        INSERT INTO pets (nome, idade, raca, tipo, responsavel) 
        VALUES ($1, $2, $3, $4, $5)
      ` ,[dados.nome, dados.idade, dados.raca, dados.tipo, dados.responsavel]);
  
    // res.status(201).send('Pet cadastrado com sucesso!');
    res.status(201).json({mensagem: 'Pet cadastrado com sucesso!'});
    
  } catch {
    res.status(500).json({mensagem: 'Não foi possível cadastrar o pet'});
  }

    
    // const {nome, idade, tipo} = req.body;
    // const query = 'INSERT INTO pets (nome, idade, tipo) VALUES ($1, $2, $3)';
    // await conexao.query(query, [nome, idade, tipo]);
    // res.send('Pet cadastrado com sucesso!');
});

app.post('/vacinas', async (req, res) => {

  try {
    const dados = req.body;
    console.log(dados);
  
    if(!dados.nome || !dados.descricao || !dados.dose) {
        res.status(400).json({mensagem: 'Dados inválidos'});
        return;
    }
    
    await conexao.query(
      `
        INSERT INTO vacinas (nome, descricao, dose) 
        VALUES ($1, $2, $3)
      `, [dados.nome, dados.descricao, dados.dose]);
  
    res.status(201).json({mensagem: 'Vacina cadastrada com sucesso!'});
    
  } catch {
    res.status(500).json({mensagem: 'Não foi possível cadastrar a vacina'});
  }

});

// app.get("/pets", async (req, res) => {
//   const dados = res.query;
//   console.log(dados);

//     const pets = await conexao.query('SELECT * FROM pets');
//     res.status(200).json(pets.rows);
// });
app.get("/pets", async (req, res) => {
  const dados = req.query;
  // console.log(dados);
  
  // const pets = await conexao.query('SELECT * FROM pets');
  // const pets = await conexao.query('SELECT * FROM pets where nome ilike $1', [dados.nome]);


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


  // querie do chat da aula, mas não retornou nada quando *
  // try {
  //   const pets = await conexao.query(`SELECT * FROM pets 
  //     where '' IS NULL 
  //     OR 
  //     nome ilike '%' || $1 || '%'`, [dados.nome]);
  //   res.status(200).json(pets.rows);
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).send('Erro ao consultar a tabela');
  // }

});


// ex: localhost:3000/pets/6

//TODO: se passar id que não existe ainda está retornando 204
app.delete('/pets/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await conexao.query('DELETE FROM pets WHERE id = $1', [id]);
    res.status(204).json();
  } catch {
    res.status(500).json({mensagem: 'Não foi possível excluir o pet'});
  }

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
