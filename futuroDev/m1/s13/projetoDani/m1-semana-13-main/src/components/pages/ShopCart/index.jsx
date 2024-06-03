import { useContext } from "react";
import { ProductContext } from "../../../contexts/products";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

function ShopCart() {
 // ETAPA 4 - UTILIZANDO O CONTEXTO EM QUALQUER COMPONENTE QUE ESTIVER ENVOLVIDO PELO PROVIDER
 const { cartItems, resetCart } = useContext(ProductContext);

 return (
  <div>
   <header>
    <h2>Carrinho de Compras</h2>
   </header>

   <div className="page-content">
    {/* Verificando se o carrinho está vazio */}
    <div className={styles.cartList}>
     {cartItems.length === 0 ? (
      <p>O carrinho está vazio.</p>
     ) : (
      <>
       <p>Você possui {cartItems.length} items</p>
       {/* Mapeando e exibindo os itens do carrinho */}
       {cartItems.map((item, index) => (
        <div key={`cart-item=${item.id}-${index}`}>
         <p>
          {item.name} - R$ {item.price}
         </p>
        </div>
       ))}
      </>
     )}
    </div>

    {cartItems.length > 0 ? (
     <button>
      <Link to="/" onClick={() => resetCart()}>
       Finalizar a compra
      </Link>
     </button>
    ) : (
     <button>
      <Link to="/">Ver produtos</Link>
     </button>
    )}
   </div>
  </div>
 );
}

export default ShopCart;
