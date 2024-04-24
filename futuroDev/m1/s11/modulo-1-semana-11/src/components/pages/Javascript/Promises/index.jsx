import PostHeader from "../../../organisms/PostHeader";
import SimpleCard from "../../../organisms/SimpleCard";

function Promises() {
 function simplePromise(isError) {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
    if (isError) return reject("Ocorreu um erro :(");
    resolve("Deu tudo certo!");
   }, 500);
  });
 }

 function callPromise(isError) {
  simplePromise(isError)
   .then((res) => console.log(`(then): ${res}`))
   .catch((err) => console.log(`(catch): ${err}`))
   .finally(() => console.log("(finally): A Promise concluiu sua execução."));

  console.log("A promessa está sendo executada...");
 }

 return (
  <div>
   <PostHeader
    title="Promises"
    description="Uma Promise é um recurso do Javascript para lidar com operações
 assíncronas."
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Anotações</h2>

     <SimpleCard>
      <span>
       Por padrão o Javascript é síncrono, ou seja, executa o código linha a
       linha. Uma promise é um escopo declarado assíncrono no código, ou seja as
       o código não será executado linha a linha, ele fará uma pausa para
       aguardar uma resposta.
      </span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Estados de uma promise</h2>
      <ul>
       <li>
        <b>pending:</b> estado inicial, nem cumprido nem rejeitado.
       </li>
       <li>
        <b>fulfilled:</b> significa que a operação foi concluída com sucesso.
       </li>
       <li>
        <b>rejected:</b> significa que a operação falhou.
       </li>
      </ul>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Métodos de uma promise</h2>
      <ul>
       <li>
        <i className="fa-solid fa-check-square"></i> <b>then:</b> executado se
        obtivermos sucesso e terá como parâmetro o retorno do resolve.
       </li>
       <li>
        <i className="fa-solid fa-exclamation-triangle"></i> <b>catch:</b>
        executado se houver algum erro e terá como parâmetro o retorno do
        reject.
       </li>
       <li>
        <i className="fa-solid fa-flag-checkered"></i> <b>finally:</b>
        executado ao fim da execução, havendo sucesso ou erro.
       </li>
      </ul>
     </SimpleCard>
    </div>
    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">Observando as respostas de uma Promise</h2>
      <span>
       Execução de uma promessa simples que usa um setTimeout para simular um
       ambiente onde existe uma necessidade de aguardar uma resposta.
      </span>

      <div className="double-button-wrapper">
       <button onClick={() => callPromise(false)}>Promise de sucesso</button>
       <button onClick={() => callPromise(true)}>Promise de erro</button>
      </div>
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default Promises;
