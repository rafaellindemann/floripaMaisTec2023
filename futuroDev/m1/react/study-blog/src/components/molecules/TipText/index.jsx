import "./index.css";

function TipText({ text, margin }) {
 return (
  <p id="tip-text" style={{ margin: margin }}>
   <img src="/assets/idea.png" alt="Ícone de lâmpada" />
   {text}
  </p>
 );
}

export default TipText;
