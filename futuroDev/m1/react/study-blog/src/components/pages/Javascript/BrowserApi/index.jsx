import PostHeader from "../../../organisms/PostHeader";
import SimpleCard from "../../../organisms/SimpleCard";

function BrowserApi() {
 // ---------------------------
 // setInterval e clearInterval

 let counter = 0;
 function intervalCallback() {
  counter++;
  console.log("Quantas vezes o intervalo foi chamado:", counter);
 }

 let intervalId;

 function startInterval() {
  intervalId = setInterval(intervalCallback, 1000);
 }

 function stopInterval() {
  clearInterval(intervalId);
 }

 // ---------------------------
 // setTimeout

 function startTimer() {
  setTimeout(() => window.alert("O tempo terminou"), 1000);
 }

 return (
  <div>
   <PostHeader
    title="Browser API"
    description="Um conjunto de recursos do navegador que permitem a integração da
    aplicação com funções nativas do Browser"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Anotações</h2>

     <SimpleCard>
      <span>Esse conjunto de recursos também é chamado de web APIs</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Integrações fornecidas</h2>
      <ul>
       <li>
        <b>Fetch:</b> usado para realizar chamadas HTTP para um servidor.
       </li>
       <li>
        <b>Manipulação da estrutura da página:</b> usadas para manipular HTML e
        CSS pelo Javascript.
       </li>
       <li>
        <b>Armazenamento (Storage):</b> usada para armazenar dados no lado do
        cliente (client-side).
       </li>
       <li>
        <b>Audio e vídeo:</b> usadas para gerenciar, exibir e criar diferentes
        tipos de mídia.
       </li>
      </ul>
     </SimpleCard>
    </div>
    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">setInterval e clearInterval</h2>
      <h4 className="mb-1">Sintaxe setInterval:</h4>
      <code className="mb-1">setInterval(function, delay);</code>

      <h4 className="mb-1">Sintaxe clearInterval:</h4>
      <code className="mb-1">clearInterval(intervalId);</code>

      <p className="mb-1">
       A propriedade function recebe uma função que será executada a cada
       contagem dos milissegundos passados para a propriedade delay. Para que o
       loop gerado pelo <i>setInterval</i> pare é necessário chamar a função
       clearInterval que recebe como parâmetro o id do intervalo que você deseja
       que seja interrompido. O id do intervalo pode ser capturado atribuindo o
       intervalo a uma constante.
      </p>
      <p className="mb-1">
       O primeiro botão abaixo inicia um intervalo com delay de 1 segundo que
       imprime no console a quantidade de vezes que o intervalo ocorreu até
       aquele momento e o segundo botão interrompe o intervalo iniciado.
      </p>

      <div className="double-button-wrapper">
       <button onClick={() => startInterval()}>Iniciar intervalo</button>
       <button onClick={() => stopInterval()}>Interromper intervalo</button>
      </div>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">setTimeout</h2>

      <code className="mb-1"> setTimeout(function, delay); </code>

      <p className="mb-1">
       A propriedade function recebe uma função que será executada uma única vez
       após o fim do tempo em milissegundos determinado na propriedade delay.
      </p>

      <p className="mb-1">
       Esse método é muito semelhante a um timer, por isso, esse será o exemplo
       utilizado. O botão abaixo cria um timeout de 1 segundo que no fim do
       período exibe um alerta na página: &quot;O tempo terminou&quot;.
      </p>

      <button onClick={() => startTimer()}>
       <i className="fa-solid fa-clock"></i> Iniciar timer
      </button>
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default BrowserApi;
