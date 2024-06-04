import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Estabelecimento" {...register("Estabelecimento", {required: true})} />
      <input type="text" placeholder="Pedido" {...register("Pedido", {required: true})} />
      <input type="number" placeholder="Avaliação (0..10)" {...register("Avaliação (0..10)", {required: true, max: 10, min: 0})} />
      <textarea {...register} />

      <input type="submit" />
    </form>
  );
}