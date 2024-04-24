import PostHeader from "../../../organisms/PostHeader";
import SimpleCard from "../../../organisms/SimpleCard";

function Fetch() {
 function getStarWarsFilms() {
  fetch("https://swapi.dev/api/films")
   .then((res) => res.json())
   .then((json) => console.log(json))
   .catch((err) => console.error(err));
 }

 return (
  <div>
   <PostHeader
    title="Fetch"
    description="Recurso disponibilizado pelo navegador para realizar chamadas
    HTTP"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Anotações</h2>

     <SimpleCard>
      <h2 className="second-title">Sintaxe</h2>
      <code className="mb-1">fetch(resource, options);</code>

      <h2 className="second-title">Parâmetros</h2>
      <ul>
       <li>
        <b>resource</b> (Obrigatório) e representa o endereço em que o fetch irá
        buscar o recurso desejado.
       </li>
       <li>
        <b>options</b> (Opcional): permite a configuração da requisição por meio
        de um objeto. É onde podemos escolher o method, headers, body e outras
        opções para realizar o fetch.
       </li>
      </ul>
     </SimpleCard>
    </div>
    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="caption">Buscando dados de uma API</h2>
      <p className="mb-1">
       O botão abaixo busca a lista filmes da trilogia Star Wars de uma API
       gratuita com dados e imprime a resposta da requisição no console assim
       que receber uma resposta.
      </p>
      <button onClick={() => getStarWarsFilms()}>Buscar filmes</button>
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default Fetch;
