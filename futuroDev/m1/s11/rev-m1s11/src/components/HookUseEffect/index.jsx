import { useEffect, useState } from "react"
import './index.css'
function HookUseEffect() {

  // didMount
  // a ser executado na primeira renderização
  const [observar, setObservar] = useState(0);
  useEffect(() => {
    console.log('useEffect primeira renderização porque usa somente o array vazio como segundo parâmetro');
    document.title = 'Revisão'
  }, []);

  // "isto aqui é um didUpdate também, tá (Prof Dani)"
  // didUpdate (observando uma específica)
  // a ser executado na primeira renderização e sempre que o valor do estado observar mudar
  useEffect(() => {
    console.log('useEffect: o valor do estado observar mudou, agora é', observar);
  }, [observar]);

  // didUpdate - atualizações no estado do componente (observando todas as atualizações)
  // a ser executado em todas as renderizações porque não tem o segundo parâmetro
  useEffect(() => {
    console.log('useEffect: nova renderização (do sempre, sem parâmetro)');

    // o hook useEffect está preparado para lidar com a desmontagem/morte do componente em uma função retornada nele
    return () => {
      // cancelar coisas que foram criadas neste useEffect e que não devem continuar existindo
    }
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
        <h4>Efeitos colaterais</h4>
        <p>Sempre que vamos executar algo fora do escopo React como uma chamada HTTP, a criação de um timer ou intervalo, a manipulação do DOM...</p>
        <p>
          <b>Devem estar dentro de um useEffect (porque este é o ambiente preparado para lidar com efeitos colaterais.</b>
        </p>
        <p>
          <b>Ciclo de vida do componente:</b>
          <ul>
            <li><b>Nasce</b> (didMount - repressentado pelo useEffect com array vazio)</li>
            <li><b>É atualizado</b> (didUpdate - repressentado pela falta do segundo parâmetro no useEffect ou pelo segundo parâmetro posuir valores no array (array não vazio))</li>
            <li><b>Vai morrer</b> (willUnmount - pela função retornada no useEffect)</li>
          </ul>
        </p>
          <p>Exemplos perdidos</p>
          <ul>
            <li>document.title = "Revisão"</li>
            <li>fetch()</li>
            <li>setInterval()</li>
          </ul>
          <p>Precisamos tratar a desmontagem do componente quando usamos funcionalidades assíncronas que precisam ser canceladas ou com timer/inttervalos por exemplo.</p>

          <h4><code>-=Tem muita explicação nos comentários do código=-</code></h4>
    </div>
  )
}

export default HookUseEffect
