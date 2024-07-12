const Programador = require("./Programador");

class ProgramadorFrontend extends Programador {

    #framework = ''

    constructor(nome, tempo, framework) {
        super(nome, tempo)
        this.#framework = framework
    }

    codificar(){
        console.log("Criar interfaces Web ....")
    }

    centralizarDiv(){
        console.log("Criar interfaces Web")
    }
}

module.exports = ProgramadorFrontend