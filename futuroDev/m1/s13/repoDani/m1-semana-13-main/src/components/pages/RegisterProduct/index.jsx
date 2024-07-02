import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/products";
import { Link } from "react-router-dom";

import styles from "./index.module.css";
import CurrencyInput from "../../atoms/CurrencyInput";

function RegisterProduct() {
 const { addProduct } = useContext(ProductContext);

 const {
  register,
  handleSubmit,
  control,
  formState: { errors }
 } = useForm();

 function onSubmit(formValue) {
  // lidar com o valor do formulário: enviar para api, enviar pra um contexto, etc..
  console.log("valor do formulário", formValue);

  addProduct(formValue);
 }

 return (
  <div>
   <header>
    <h2>Cadastro de produto</h2>
    <button>
     <Link to="/">Voltar para produtos</Link>
    </button>
   </header>

   {/* uso da função handleSubmit para tratar o formulário e enviar os valores para a função personalizada onSubmit */}
   <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <div>
     <label htmlFor="name">Nome do produto</label>
     <input
      type="text"
      {...register("name", {
       required: "Por favor, insira o nome do produto",
       minLength: { value: 3, message: "Insira um nome de produto válido" },
       maxLength: {
        value: 120,
        message: "Insira um nome de produto com no máximo 120 caracteres"
       }
      })}
     />
     {errors?.name && (
      <p className={styles.errorMessage}>{errors.name.message}</p>
     )}
    </div>

    <div>
     <label htmlFor="price">Valor do produto</label>
     <input
      type="number"
      step="any" // para números float
      {...register("price", {
       required: "Por favor, insira o valor do produto"
      })}
     />
     {errors?.price && (
      <p className={styles.errorMessage}>{errors.price.message}</p>
     )}
    </div>

    <div>
     <label htmlFor="value">Input com máscara</label>
     <CurrencyInput name="value" control={control} />
    </div>

    <button type="submit">Cadastrar</button>
   </form>
  </div>
 );
}

export default RegisterProduct;
