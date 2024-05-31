import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Gi3dStairs, GiAk47U, GiBullyMinion } from "react-icons/gi";
import { Button, TextField, Card, CardContent } from '@mui/material';
import Treco from './components/Treco';


function App() {
  const [usuarios, setUsuarios] = useState([])
  const [novoUsuario, setNovoUsuario] = useState({
    nome: '',
    email: ''
  })

  const nomeInputRef = useRef(null); // Criando a referência

  function cadastrar(){
    setUsuarios([...usuarios, novoUsuario])
    setNovoUsuario({
      nome: '',
      email: ''
    })
    // console.log(usuarios);
    nomeInputRef.current.focus(); // Focando no input de nome
  }

  return (
    <div className='container'>
      <div>
        
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <div>
        <Button variant="contained" color="primary">primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="error">error</Button>
        <Button variant="contained" color="success">success</Button>
      </div>
        <a href="https://mui.com/material-ui/react-button/">Link pra página MUI Button</a>

      <div>
      <Card variant="outlined">
        <CardContent>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit assumenda tempore iusto a officia molestiae, officiis ipsa beatae repellendus illo eveniet quae quas neque, dolorem quam reiciendis suscipit saepe consequuntur.</p>
          <a href="https://mui.com/material-ui/react-card/">Link pra saber mais sobre card que a explicação foi bem quarto de boca</a>
        </CardContent>
      </Card>
      </div>

      <div>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
      <a href="https://mui.com/material-ui/react-text-field/">link TextField</a>

      <Card>
        <CardContent>
          <h2>Cadastro simulator</h2>
          <ul>
            <li>{novoUsuario.nome}</li>
            <li>{novoUsuario.email}</li>
          </ul>
          <TextField label="Nome" variant="outlined" size='small'
            value={novoUsuario.nome}
            inputRef={nomeInputRef} // Atribuindo a referência ao input
            margin="normal"
            onChange={(evento) => setNovoUsuario({...novoUsuario, nome: evento.target.value})}
          />
          <TextField label="Email" variant="outlined" size='small'
            value={novoUsuario.email}
            margin="normal"
            onChange={(evento) => setNovoUsuario({...novoUsuario, email: evento.target.value})}
          />
          <Button variant='contained' size='small' onClick={cadastrar}>Cadastrar</Button>
        </CardContent>

      </Card>
        <p>***Ele mostrou como alterar margin através da prop 'margin' que tem na doc, mas só pega verticar e foi um quinto de boca.</p>
      <div>
        <h2>map de usuários</h2>
        {usuarios.map((u, index) => (
          <p key={index}>{u.nome} - {u.email}</p>
        ))}
      </div>


      <a href="http://mui.com">Doc da Material UI</a> <br />

      <div className="icons">
        <Gi3dStairs />
        <GiAk47U />
        <GiBullyMinion />
      </div>
      <Gi3dStairs />
      <GiAk47U />
      <a href="https://react-icons.github.io/react-icons/">React-Icons</a>
      
      <div>
        <h2>Trecos CSS modules</h2>
        <Treco n={0} />
        <Treco n={1} />
        <Treco n={2} />
      </div>

    </div>
  )
}

export default App
