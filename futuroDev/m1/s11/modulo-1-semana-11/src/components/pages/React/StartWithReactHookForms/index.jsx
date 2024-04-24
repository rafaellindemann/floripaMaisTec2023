import PostHeader from "../../../organisms/PostHeader";
import SimpleCard from "../../../organisms/SimpleCard";

function StartWithReactHookForms() {
 return (
  <div>
   <PostHeader
    title="React Hook Form"
    description="Biblioteca de formulários baseada em componentes controlados"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Componentes controlados</h2>

     <SimpleCard>
      <h2 className="caption">Definição</h2>
      <span>Escreva uma descrição sobre a biblioteca</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Pontos importantes</h2>

      <ul>
       <li>
        A biblioteca gerencia os formulários com base em componentes controlados
       </li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">Lidando com formulários</h2>
      <p className="mb-2">
       O formulário abaixo foi criado utilizando a biblioteca react-hook-form
      </p>
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default StartWithReactHookForms;
