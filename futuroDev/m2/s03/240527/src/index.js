const readline = require('readline/promises')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function iniciar(){
    const altura = await input.question("Altura do Triângulo: ")
    const base = await input.question("Base do Triângulo: ")

    console.log()


}

iniciar()