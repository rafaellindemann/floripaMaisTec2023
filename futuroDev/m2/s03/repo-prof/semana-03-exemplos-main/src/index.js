const readline = require('readline/promises');
const { calcularAreaTriangulo } = require('./formulasAreas');
const { calcularPerimetroTriangulo } = require('./formulasPerimetros');
const { calcularJurosSimples } = require('./juros');
const buscarInformacoesCep = require('./cep');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function iniciar() {
    const altura = Number(await input.question("Qual é a altura ?"))
    const base = Number(await input.question("Qual é a base ?"))
    input.close()
    console.log(calcularAreaTriangulo(altura, base))
}

async function perimetro(){
    const ladoA = Number(await input.question("QUal é o valor do lado A ?"))
    const ladoB = Number(await input.question("QUal é o valor do lado B ?"))
    const ladoC = Number(await input.question("Qual é o valor do lado C ?"))

    console.log(calcularPerimetroTriangulo(ladoA, ladoB, ladoC))
}

async function jurosSimples(){
   const capital = Number(await input.question("Qual é o valor que você deseja ?"))
   const taxaMensal = Number(await input.question("Qual é a taxa mensal ?"))
   const tempoMeses = Number(await input.question("Qual é a quantidade de meses ?"))

   const juros = calcularJurosSimples(capital, taxaMensal, tempoMeses)
   const montante = capital + juros

   console.log("JUROS:", juros)
   console.log("Total", montante)
}

async function cep(){
   const cep = await input.question("QUal é o seu cep ?")
   const  dadosDoCep = await buscarInformacoesCep(cep)
   console.log("O endereço é ", dadosDoCep)

   
}

cep();