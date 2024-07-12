class Programador {
    #nome = ''
    #tempoExperiencia = 0

    constructor(nome, tempoExperiencia = 0) {
        this.#nome = nome
        this.#tempoExperiencia = tempoExperiencia
    }

    get getNome(){
        return this.#nome
    }

    set setNome(nome) {
        this.#nome = nome
    }

    get getTempoExperiencia(){
        return this.#tempoExperiencia
    }

    set setTempoExperiencia(tempoExperiencia) {
        this.#tempoExperiencia = tempoExperiencia
    }

    codificar(){
        console.log("Programando .....")
    }

}

module.exports = Programador