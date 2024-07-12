const Funcionario = require('./Funcionario.js')
const Pessoa = require('./Pessoa.js')
const Programador = require('./Programador.js')
const ProgramadorFrontend = require('./ProgramadorFrontend.js')

/* Exemplo com classes */
const maria = new Pessoa('Maria', 20)
const henrique = new Pessoa('Henrique Douglas', 25)

//console.log(henrique.getNome)
henrique.setIdade = 30
//console.log(henrique.getIdade)
//henrique.cumprimentar()

/* Exemplo com herança */

const funcionario = new Funcionario('Douglas', 20, 'Programador')
//console.log(funcionario.getNome)
//console.log(funcionario.cumprimentar())


/*  Exemplo Programador */

const programadorNormal = new Programador("Henrique Douglas")
console.log("normal", programadorNormal.getTempoExperiencia)

const programadorFrontend = new ProgramadorFrontend("Henrique Douglas", 4,  'React')
programadorFrontend.setTempoExperiencia = 4
console.log(programadorFrontend.codificar())


/* Exemplo com funcoes */
const _pessoa = {
    nome: 'Henrique',
    idade: 12
}

function greet(nome, idade){
    console.log(`Menu nome é ${nome} e tenho ${idade}`)
}

