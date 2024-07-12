const Pessoa = require("./Pessoa");

class Funcionario extends Pessoa {
    
    #cargo

    constructor(nome, idade, cargo) {
        super(nome, idade)
        
        this.#cargo = cargo
    }

    get getCargo(){
        return this.#cargo
    }

    set setCargo(cargo){
        this.#cargo = cargo
    }

    cumprimentar() {
        console.log("Muita boa tarde ....")
    }
}

module.exports = Funcionario