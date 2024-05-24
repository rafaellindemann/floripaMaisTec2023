import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Gi3dStairs, GiAk47U, GiBullyMinion } from "react-icons/gi";
import { Button } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>

      <div className="icons">
        <Gi3dStairs />
        <GiAk47U />
        <GiBullyMinion />
      </div>
      <Gi3dStairs />
      <GiAk47U />
    </>
  )
}

export default App
