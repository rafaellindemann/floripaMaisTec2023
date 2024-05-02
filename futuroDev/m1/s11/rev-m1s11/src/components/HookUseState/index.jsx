import { useState } from "react";
import './index.css'
function HookUseState() {
  const [valorAleatorio, setValorAleatorio] = useState(0);
  const [count, setCount] = useState(0);
  const [contBom, setContBom] = useState(0);
  const [contBugado, setContBugado] = useState(0);

  return (
    <div className="divState">
        <h1>Hook useState</h1>
      <ul>
        <li>useState: criar variáveis que causam novas visualizações da tela assim que houver uma alteração no seu valor.</li>
      </ul>
      <button onClick={() => setValorAleatorio(Math.ceil(Math.random()*100))}>Gerar valor aleatório</button>
      <h4>{valorAleatorio}</h4>

      <h4>Atualizando um estado com base no valor anterior</h4>
      {/* <button onClick={() => setCount(count+1)}>O valor do count é {count}</button>  */}
      <button onClick={() => setCount(c => c+1)}>O valor do count é {count}</button>

      <h4>Mostrando o cont bugar com a sintaxe de cont+1</h4>
      <button onClick={() => {
        setContBugado(contBugado+1)
        setContBugado(contBugado+1)
      }}>
        contBugado: {contBugado}
      </button>

      <button onClick={() => {
        setContBom((c) => c+1)
        setContBom((c) => c+1)
      }}>
        contBom: {contBom}
      </button>
    </div>
  )
}
export default HookUseState;