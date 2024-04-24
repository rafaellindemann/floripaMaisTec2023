import PostHeader from "../../../organisms/PostHeader";
import SimpleCard from "../../../organisms/SimpleCard";

function LocalStorage() {
 function saveData(value) {
  localStorage.setItem("futuro", value);
  window.alert(`O valor salvo para a key "futuro" foi: ${value}`);
 }

 function getData() {
  const value = localStorage.getItem("futuro");
  window.alert(`O valor resgatado da key "futuro" foi: ${value}`);
 }

 function clearData() {
  localStorage.removeItem("futuro");
 }

 function clearStorage() {
  localStorage.clear();
 }

 return (
  <div>
   <PostHeader
    title="LocalStorage"
    description="Propriedade do objeto Window que permite acessar os dados armazenados
    na página web."
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Anotações</h2>

     <SimpleCard>
      <ul>
       <li>
        Os dados salvos no localStorage só são apagados manualmente ou pelo
        usuário
       </li>
       <li>
        O localStorage é muito semelhante ao sessionStorage, porém, o
        sessionStorage não armazena os dados caso a aba seja fechada ou a sessão
        da página expire.
       </li>
       <li>
        Para visualizar os dados salvos no localStorage basta acessar as
        ferramentas de desenvolvedor do navegador (F12), em seguida navegar até
        a aba Application e por fim acessar a tab do localStorage.
       </li>
      </ul>
     </SimpleCard>
    </div>
    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">Salvar um valor no localStorage</h2>
      <code className="mb-1"> localStorage.setItem(key, value) </code>
      <p className="mb-1">
       O botão abaixo salva a key &quot;futuro&quot; com o value
       &quot;dev&quot;.
      </p>
      <button onClick={() => saveData("dev")}>Salvar</button>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Resgatar um valor no localStorage</h2>
      <code className="mb-1">localStorage.getItem(key);</code>
      <p className="mb-1">
       O botão abaixo resgata o value da key &quot;futuro&quot; e exibe o valor
       em um alerta.
      </p>
      <button onClick={() => getData()}>Resgatar</button>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Remover um valor no localStorage</h2>
      <code className="mb-1"> localStorage.removeItem(key); </code>
      <p className="mb-1">
       O botão remove a key &quot;futuro&quot; do localStorage.
      </p>
      <button onClick={() => clearData()}>Remover o valor</button>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Remover todos os valores no localStorage</h2>
      <code className="mb-1">localStorage.clear();</code>
      <p className="mb-1">
       O botão remove todos os valores existentes no localStorage.
      </p>
      <button onClick={() => clearStorage()}>Limpar o localStorage</button>
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default LocalStorage;
