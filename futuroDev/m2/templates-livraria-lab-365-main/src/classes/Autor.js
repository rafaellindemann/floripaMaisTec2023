const crypto = require('crypto');

class Autor {
    #codigo = 0;
    #nome = '';
    #generoLiterario = '';

    constructor(nome) {
        this.#nome = nome;
        this.#codigo = crypto.randomUUID();
    }

    get getCodigo() {
        return this.#codigo;
    }

    set setCodigo(codigo) {
        this.#codigo = codigo;
    }

    get getNome() {
        return this.#nome;
    }
    
    set setNome(nome) {
        this.#nome = nome;
    }

    get getGeneroLiterario() {
        return this.#generoLiterario;
    }

    set setGeneroLiterario(generoLiterario) {
        this.#generoLiterario = generoLiterario;
    }

    toJSON() {
        return {
            codigo: this.getCodigo,
            nome: this.getNome,
            generoLiterario: this.getGeneroLiterario
        };
    }
}

module.exports = Autor;