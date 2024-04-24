import PostHeader from "../../../organisms/PostHeader";
import SimpleCard from "../../../organisms/SimpleCard";
import useFetch from "../../../../hooks/useFetch";

function Json() {
 const [planets, isLoading] = useFetch("/data/planets.json");

 function showFileContent() {
  console.log(planets, isLoading);
 }

 function convertJsToJson() {
  console.log(JSON.stringify(planets));
 }

 function convertJsonToJs() {
  const jsonExample = '{ "name": "John", "age": 22 }';
  console.log(JSON.parse(jsonExample));
 }

 return (
  <div>
   <PostHeader
    title="JSON"
    description="É um formato de arquivo utilizado para trocar informações legíveis por
    ser humanos."
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Anotações</h2>

     <SimpleCard>
      <ul>
       <li>JSON é a sigla para JavaScript Object Notation.</li>
       <li>
        Antes do JSON era utilizado XML (Extensive Markup Language) para trocar
        informações entre servidores, porém, o JSON ganhou maior popularidade
        por possuir uma sintaxe mais limpa e ser mais leve em relação ao seu
        antecessor.
       </li>
       <li>
        O arquivo é composto por texto e utiliza a extensão &quot;.json&quot;.
       </li>
      </ul>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">
       Diferenças entre a sintaxe JSON e Objetos Javascript
      </h2>
      <ul>
       <li>
        <b>Aspas duplas:</b> diferente dos objetos JS, chaves de objetos
        precisam estar envoltas por aspas duplas em um arquivo JSON.
       </li>
       <li>
        <b>Funções:</b> arquivos JSON não podem conter funções, enquanto os
        objetos JavaScript podem.
       </li>
       <li>
        <b>Outras linguagens de programação:</b> os objetos Javascript pertencem
        unicamente a linguagem JS, porém o formato JSON pode ser usado por
        inúmeras outras linguagens.
       </li>
      </ul>
     </SimpleCard>
    </div>
    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="title">Carregando um arquivo JSON</h2>
      <span className="mb-1">
       É possível ler e utilizar os dados de um arquivo JSON incluso no seu
       projeto usando a importação de arquivos comuns do JS acrescido pelo
       assert indicando o type como json, conforme o exemplo abaixo:
      </span>

      <code className="mb-1">
       import planets from &quot;../../data/planets.json&quot;
       <b>assert {"{ type: 'json' }"}</b>;
      </code>

      <span className="mb-1">
       Para essa importação funcionar no seu arquivo JavaScript ele precisa
       estar sendo importado no HTML usando o atributo{" "}
       <code className="mb-1">type=&quot;module&quot;</code>.
      </span>

      <p className="mb-1">
       Ao clicar no botão será imprimido no console o conteúdo do arquivo
       carregado &quot;planets.json&quot;, que usando o assert já foi convertido
       para objeto Javascript. O arquivo em questão contém uma listagem de
       planetas da franquia Star Wars.
      </p>
      <button onClick={() => showFileContent()}>
       Mostrar conteúdo do arquivo
      </button>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">
       Convertendo um Objeto Javascript para JSON
      </h2>
      <p className="mb-1">
       Ao clicar no botão abaixo o conteúdo do arquivo mostrado no console no
       exemplo anterior será convertido para JSON e o resultado será exibido no
       console.
      </p>
      <button onClick={() => convertJsToJson()}>Converter para JSON</button>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">
       Convertendo um JSON para Objeto Javascript
      </h2>
      <p className="mb-1">
       Ao clicar no botão abaixo um objeto escrito em JSON será comvertido para
       Javascript e o resultado será exibido no console.
      </p>
      <button onClick={() => convertJsonToJs()}>
       Converter para JS Object
      </button>
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default Json;
