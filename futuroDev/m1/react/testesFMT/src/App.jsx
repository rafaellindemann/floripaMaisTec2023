import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardTrilha from './components/CardTrilha'

function App() {
  const [count, setCount] = useState(0)
  const listaTrilhas = [
    {
      // id: 0,
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: 'Florianópolis',
      estado: 'SC',
      duracao: 120,
      trajeto: 4,
      dificuldade: 'iniciante',
      tipo: 'caminhada / trekking',
      nomeUsuario: 'Guiilherme André',
      urlImagem: 'https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg'

    },
    {
      // id: 0,
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: 'Florianópolis',
      estado: 'SC',
      duracao: 120,
      trajeto: 4,
      dificuldade: 'iniciante',
      tipo: 'caminhada / trekking',
      nomeUsuario: 'Guiilherme André',
      urlImagem: 'https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg'

    },
  ]

  return (
    <>
      {listaTrilhas.map((trilha, index) => (
        <CardTrilha key={index} dadosTrilha={trilha}/>
      ))}
    </>
  )
}

export default App
