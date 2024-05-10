
import { useState } from 'react'
import './App.css'
import HookUseState from './components/HookUseState';
import HookUseEffect from './components/HookUseEffect';


function App() {
  const [showUseEffectSection, setShowUseEffectSection] = useState(true)

//  console.log('Houve uma nova renderização');
  return (
    <>
  
      <h1>Revisão da semana 11</h1>
      <p>Recursos do React: REATIVIDADE</p>
      {showUseEffectSection && <HookUseEffect />}
      
      <button onClick={() => setShowUseEffectSection((s) => !s)}>Desmontar componente useEffect</button>
      <HookUseState/>
      
      
    </>
  )
}

export default App
