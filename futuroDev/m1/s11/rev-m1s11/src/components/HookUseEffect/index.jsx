import { useEffect, useState } from "react"
import './index.css'
function HookUseEffect() {

  // a ser executado na primeira renderização
  const [observar, setObservar] = useState(0);
  useEffect(() => {
    console.log('useEffect primeira renderização');
  }, []);

  // a ser executado na primeira renderização e sempre que o valor do estado observar mudar
  useEffect(() => {
    console.log('useEffect: o valor do estado observar mudou, agora é', observar);
  }, [observar]);

  // a ser executado em todas as renderizações
  useEffect(() => {
    console.log('useEffect: nova renderização (do sempre, sem parâmetro)');
  });

  return (
    <div className="divEffect">
        <h1>HookUseEffect</h1>
        <h4>Parâmetros</h4>
        <ul>
          <li>Callback: função a ser executada de acordo com os argumentos do segundo parâmetro</li>
          <li>Ideal que essa callback seja uma arrow function.</li>
          <li>
            Dependências
            <ul>
              <li>Se não passar nada: vai executar a callback em todas as renderizações do componente.</li>
              <li>Se passar um array vazio []: vai executar a callback assim que o componente for renderizado pela primeira vez.</li>
              <li>Se passar um array com argumentos [estadoX, estadoY...], vai executar quando o componente renderizar e sempre que o valor de algum item da lista de argumentos mudar.</li>
            </ul>
          </li>
        </ul>

        <button onClick={() => {setObservar(o => o+1)}}>Alterar o valor do estado para causar uma renderização {observar}</button>
    </div>
  )
}

export default HookUseEffect
