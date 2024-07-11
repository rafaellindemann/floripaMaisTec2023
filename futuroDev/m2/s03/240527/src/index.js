const readline = require('readline/promises')
const { calcularAreaTriangulo } = require('./formulasAreas')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

async function iniciar(){
    const altura = await input.question("Altura do Triângulo: ")
    const base = await input.question("Base do Triângulo: ")

    // const area = (base * altura) / 2

    console.log('A área do triângulo é: ', calcularAreaTriangulo(base, altura))

    input.close()
}

iniciar()