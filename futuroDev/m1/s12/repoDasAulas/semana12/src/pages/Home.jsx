import {UsuariosContext} from "../context/UsuariosContext"
import {useContext} from "react"

function Home() {

  const {usuarios} = useContext(UsuariosContext)

  return (
    <div style={{backgroundColor: 'red'}}>
      <h1>Página Home</h1>
      {usuarios[0].nome}
      <br />
      {usuarios[0].email}
    </div>
  );
}

export default Home;