import PostHeader from "../../../organisms/PostHeader";
import SimpleCard from "../../../organisms/SimpleCard";

function StartWithContexts() {
 return (
  <div>
   <PostHeader
    title="ContextAPI"
    description="Permite criar um estado global"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">
      API de contextos disponibilizada pelo ReactJs
     </h2>

     <SimpleCard>
      <h2 className="caption">Definição</h2>
      <span>O que são contextos?</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Pontos importantes</h2>

      <ul>
       <li>
        React.createContect(): é o ponto inicial, onde criamos o contexto.
       </li>
       <li>
        Provider: é um componente que deve envolver os componentes que irão
        necessitar consumir o contexto.
       </li>
       <li>
        Consumer: é quando usamos useContext(import-de-um-contexto) para
        utilizar os valores de um contexto em um componente.
       </li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">
       Criando um contexto para guardar as informações de login
      </h2>
      <p className="mb-2">
       O botão de logar abaixo utiliza contextos para memorizar se usuário está
       logado na aplicação, então mesmo que este componente seja destruído (não
       seja mais aparente na tela), o valor será guardado.
      </p>
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default StartWithContexts;
