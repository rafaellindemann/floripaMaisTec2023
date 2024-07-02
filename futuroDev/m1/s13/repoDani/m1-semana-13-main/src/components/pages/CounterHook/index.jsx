import { Link } from "react-router-dom";
import useCounter from "../../../hooks/useCounter";

import styles from "./index.module.css";

function CounterHook() {
 // atribuindo apelidos aos indices retornados no array pelo hook
 const [count, increment, incrementTwo] = useCounter();

 return (
  <div>
   <header>
    <h2>Hook useCounter</h2>
    <button>
     <Link to="/">Voltar para produtos</Link>
    </button>
   </header>

   <div className={styles.content}>
    <h3>Carrinho de compras</h3>
    <div>
     <h3>Leite - {count} unidades</h3>
     <button onClick={() => increment()}>Adicionar 1 item</button>
     <button onClick={() => incrementTwo()}>Adicionar 2 items</button>
    </div>
   </div>
  </div>
 );
}

export default CounterHook;
