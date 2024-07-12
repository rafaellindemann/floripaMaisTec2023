const Funcionario = require("./Funcionario");

class Medico extends Funcionario {
    
    #especialidade

    constructor(nome, idade, cargo) {
        super(nome, idade, cargo)
        
        this.#especialidade = especialidade
    }
    
}

module.exports = Funcionario