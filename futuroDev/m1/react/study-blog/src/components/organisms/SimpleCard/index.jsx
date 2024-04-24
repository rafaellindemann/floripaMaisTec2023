import "./index.css";

function SimpleCard({ title, children }) {
 return (
  <div id="simple-card">
   <h2 className="title">{title}</h2>

   {children}
  </div>
 );
}

export default SimpleCard;
