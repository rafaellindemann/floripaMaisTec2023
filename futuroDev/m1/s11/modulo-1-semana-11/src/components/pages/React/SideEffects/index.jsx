import { useEffect, useState } from "react";
import PostHeader from "../../../organisms/PostHeader";
import SimpleCard from "../../../organisms/SimpleCard";
import TipText from "../../../molecules/TipText";

function SideEffects() {
 const [secondsInThePage, setSecondsInThePage] = useState(0);
 const [clicks, setClick] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setSecondsInThePage(secondsInThePage + 1);
  }, 1000);

  return () => {
   clearInterval(interval);
  };
 }, [secondsInThePage]);

 useEffect(() => {
  if (clicks === 5) {
   window.alert("Você clicou 5 vezes!! Obrigada.");
  }

  if (clicks > 5) {
   window.alert(`Você clicou ${clicks} vezes, já está ok...`);
  }
 }, [clicks]);

 return (
  <div>
   <PostHeader
    title="Efeito colateral"
    description="Eventos que precisam ser realizados sem que haja interação do usuário"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Anotações</h2>

     <SimpleCard>
      <h2 className="second-title">Exemplos de efeitos colaterais:</h2>
      <ul>
       <li>Buscar dados em um servidor</li>
       <li>Ler ou gravar dados no armazenamento do navegador</li>
       <li>Alterações no documento HTML</li>
       <li>Exibir alertas ao usuário</li>
      </ul>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Limpeza de efeitos colaterais</h2>

      <p className="mb-1">
       O useEffect foi construído para que possamos retornar uma função de
       limpeza que será executada assim que o componente for desmontado.
      </p>

      <p className="mb-2">
       A limpeza é necessária para melhorar a performance e evitar problemas na
       aplicação. Um exemplo bem simples disso é a criação de timer (tanto com
       setInterval quanto com setTimeout), se não executarmos um clear neles na
       desmontagem do componente podemos ter problemas em uma nova renderização.
      </p>

      <TipText
       text="Um exemplo de limpeza que influencia muito na performance é usar o
       AbortController (presente no fetch) para cancelar chamadas que não
       precisarão mais de um retorno"
      />
     </SimpleCard>
    </div>
    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">
       Exibir um alerta de acordo com o valor de um estado
      </h2>
      <p className="mb-2">
       Muitas vezes precisamos realizar algo de acordo com o valor de um estado,
       a melhor maneira de realizar isso é observando este estado com useEffect
       para executar o que precisamos.
      </p>

      <p className="mb-1">
       Se você clicar 5 vezes no botão abaixo um alerta será exibido
      </p>
      <button onClick={() => setClick(clicks + 1)}>Clique em mim :)</button>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">
       Efeito colateral que necessita de limpeza
      </h2>
      <p className="mb-2">
       Você permaneceu nessa página por <b>{secondsInThePage}</b> segundos.
      </p>
      <TipText
       text="Assim que você acessou este post um intervalo de 1 segundo foi iniciado
       dentro de um useEffect, como vimos anteriormente este é um tipo de ação
       que precisa de limpeza, por isso dentro desse mesmo useEffect há um
       retorno de uma arrow function que utiliza o clearInterval para limpar
       esse intervalo."
      />
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default SideEffects;
