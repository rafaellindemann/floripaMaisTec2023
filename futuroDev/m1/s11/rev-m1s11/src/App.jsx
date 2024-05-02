
import { useState } from 'react'
import './App.css'
import HookUseState from './components/HookUseState';
import HookUseEffect from './components/HookUseEffect';


function App() {


 console.log('Houve uma nova renderização');
  return (
    <>
  
      <h1>Revisão da semana 11</h1>
      <p>Recursos do React: REATIVIDADE</p>
      <HookUseEffect />
      <HookUseState/>
      
      
    </>
  )
}

export default App
