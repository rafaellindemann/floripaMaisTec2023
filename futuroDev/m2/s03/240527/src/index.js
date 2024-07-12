const readline = require('readline/promises')
const { calcularAreaTriangulo } = require('./formulasAreas')
const { buscarInfosDoCep } = require('./buscarCep')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})



async function cep(){
    const cep = await input.question("Digite o CEP: ")
        
    const dados = await buscarInfosDoCep(cep)
    console.log(dados);
    
    input.close()
}

cep()


// async function iniciar(){
//     const altura = await input.question("Altura do Triângulo: ")
//     const base = await input.question("Base do Triângulo: ")

//     // const area = (base * altura) / 2

//     console.log('A área do triângulo é: ', calcularAreaTriangulo(base, altura))

//     input.close()
// }

// iniciar()