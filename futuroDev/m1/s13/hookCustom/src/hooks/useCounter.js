import { useEffect, useState } from "react";

function useCounter() {
 const [count, setCount] = useState(0);

 useEffect(() => {
  console.log("o count mudou");
 }, []);

 // se eu colocar codigo js aqui vai executar novamente em todas as renderizações

 function incrementOne() {
  setCount((count) => count + 1);
 }

 function incrementTwo() {
  setCount((count) => count + 2);
 }

 // retorno um array de 3 índices
 return [count, incrementOne, incrementTwo];
}

// desestruturação de array e de objetos
// array: eu dou apelidos para os valores dos índices
// objeto: eu preciso dizer o exato nome da propriedade

// no javascript normal: arrays possuem índices e objetos possuem propriedades

export default useCounter;