
class Pessoa {
  
   #nome
   #idade

   constructor(nome,idade){
      this.#nome = nome
      this.#idade = idade
   }

   get getNome(){
      return this.#nome
   }

   get getIdade(){
      return this.#idade
   }

   set setIdade(idade){
      this.#idade = idade
   }

   cumprimentar(){
      console.log(`Menu nome é ${this.#nome} e tenho ${this.#idade}`)
   }
}

module.exports = Pessoa