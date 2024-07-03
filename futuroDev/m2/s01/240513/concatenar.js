const readline = require('readline');

const input = readline.createInterface(
    process.stdin,
    process.stdout
)

let nome = '';
input.question('Digite o primeiro valor: ', (valor) => {
    nome = valor;

    let sobrenomenome = '';
    input.question('Digite o primeiro valor: ', (valor) => {
        sobrenomenome = valor;
        console.log('Nome completo: '+nome+' '+sobrenomenome);
        input.close();
    })
})



// console.log('Idade: '+nome);