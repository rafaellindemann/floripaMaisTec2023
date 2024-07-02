import { createContext, useState } from "react";

// ETAPA 1 - CRIANDO O CONTEXTO
export const ProductContext = createContext();

// ETAPA 2 - CRIANDO O PROVIDER
// eslint-disable-next-line react/prop-types
function ProductContextProvider({ children }) {
 const [cartItems, setCartItems] = useState([]);
 const [products, setProducts] = useState([
  { id: 1, name: "Leite", price: 2.99 },
  { id: 2, name: "Sabonete", price: 4.99 },
  { id: 3, name: "Maionese", price: 12.5 }
 ]);

 // Função para adicionar um item ao carrinho
 function addToCart(product) {
  setCartItems((c) => [...c, product]);
 }

 // Removendo itens do carrinho ao finalizar compra
 function resetCart() {
  setCartItems([]);
 }

 function addProduct(product) {
  setProducts((c) => [...c, { ...product, id: c.length + 1 }]);

  //   usar a lib nativa do javascript "fs" para salvar o novo produto no json
 }

 // Fornecendo o contexto do carrinho e as funções para manipulá-lo
 return (
  <ProductContext.Provider
   value={{ cartItems, addToCart, resetCart, products, addProduct }}>
   {children}
  </ProductContext.Provider>
 );
}

export default ProductContextProvider;
