import { useRef, useState } from "react";
import PostHeader from "../../../organisms/PostHeader";
import SimpleCard from "../../../organisms/SimpleCard";

function UncontrolledComponent() {
 const inputRef = useRef(null);

 function submitUncontrolledForm(event) {
  event.preventDefault();
  window.alert(
   `Você cadastrou a turma "não controlada": ${inputRef.current.value}`
  );
 }

 return (
  <form onSubmit={(e) => submitUncontrolledForm(e)}>
   <input
    type="text"
    placeholder="Nome da turma"
    name="uncontrolled-class"
    ref={inputRef}
    required
   />
   <button type="submit">Enviar</button>
  </form>
 );
}

function ControlledComponent() {
 const [controlledClass, setControlledClass] = useState("");

 function submitControlledForm(event) {
  event.preventDefault();
  window.alert(`Você cadastrou a turma "controlada": ${controlledClass}`);
 }

 return (
  <form onSubmit={(e) => submitControlledForm(e)}>
   <input
    type="text"
    value={controlledClass}
    placeholder="Nome da turma"
    name="controlled-class"
    onChange={(event) => setControlledClass(event.target.value)}
    required
   />
   <button type="submit">Enviar</button>
  </form>
 );
}

function ControlledVsUncontrolledComponents() {
 return (
  <div>
   <PostHeader
    title="Componentes controlados e não controlados"
    description="Componentes controlados são elementos manipulados por estados enquanto não controlados são manipulados por hooks de referência."
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Componentes controlados</h2>

     <SimpleCard>
      <h2 className="caption">Definição</h2>
      <span>
       Um componente React é chamado de controlado quando deixamos os recursos
       de reação do React controlar o componente para nós. Isso significa que o
       componente controla o formulário e todas as suas alterações são
       completamente controladas por manipuladores de eventos como setState().
       Além disso, o componente controla a renderização e mantém os dados do
       formulário no estado do componente.
      </span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Pontos importantes</h2>

      <ul>
       <li>
        Como o valor do input é um estado o componente será renderizado a cada
        alteração (o que prejudica a performance);
       </li>
       <li>
        As alterações são tratadas no <code>onChange</code> chamando o método{" "}
        <code>setState</code>;
       </li>
       <li>
        O valor do estado também precisa estar vinculado na propriedade{" "}
        <b>value</b> para que o input funcione;
       </li>
       <li>
        A validação do formulário pode ser realizada instantaneamente usando o{" "}
        <b>useEffect</b>
       </li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Componentes não controlados</h2>

     <SimpleCard>
      <h2 className="caption">Definição</h2>
      <span>
       Depois de estudar os componentes controlados, deve ficar claro que o
       componente não controlado React não usa estado. Assim, os componentes não
       controlados não dependem de nenhum estado dos elementos de entrada ou de
       qualquer manipulador de eventos. Este tipo de componente não se preocupa
       com alterações de entrada em tempo real.
      </span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Pontos importantes</h2>

      <ul>
       <li>
        A utilização de componentes não controlados é semelhante ao uso de
        componentes HTML &quot;puros&quot;;
       </li>
       <li>
        Os dados de entrada não são armazenados em estados e sim no próprio DOM;
       </li>
       <li>
        Ao invés de manipular o valor pelo <b>useState</b> apenas usamos a ref
        para recuperar o valor do DOM;
       </li>
       <li>
        No ambiente React, refs nos fornecem um caminho para que possamos
        manipular os componentes;
       </li>
       <li>
        É muito mais performático por não renderizar os componentes
        desnecessariamente;
       </li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">Componente não controlado</h2>
      <p className="mb-1">O input abaixo é um componente não controlado</p>

      <UncontrolledComponent />
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Componente controlado</h2>
      <p className="mb-1">O input abaixo é um componente controlado</p>

      <ControlledComponent />
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default ControlledVsUncontrolledComponents;
