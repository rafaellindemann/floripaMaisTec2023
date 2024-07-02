/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";

const CurrencyInput = ({ name, control }) => {
 return (
  <Controller
   name={name}
   control={control}
   defaultValue=""
   render={({ field }) => (
    <input
     {...field}
     type="text"
     onChange={(e) => {
      const value = parseFloat(e.target.value.replace(/\D/g, "")) / 100;
      field.onChange(
       value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      );
     }}
    />
   )}
  />
 );
};

export default CurrencyInput;
