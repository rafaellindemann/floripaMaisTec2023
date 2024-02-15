// Realizar um código para que seja perguntado ao usuário, via prompt, o nome ou código de um alimento. Após o código informado, identificar o preço deste alimento via switch e mostrá-lo ao usuário. 
// Exemplo: morango como input e a saída mostrar R$ 5,99.
// A execução do algoritmo deve ser contínua e o número 0 ou ‘sair’ é a flag para parar a execução.

let nome;

do {
    nome = prompt(`Digite o nome do produto:\ndigite '0' para parar.`);
    
    switch (nome.toUpperCase()) {
        case 'MORANGO':
            console.log(`${nome}: R$5,99 `);
            break;
        case 'MELANCIA':
            console.log(`${nome}: R$15,99 `);
            break;
        case 'LARANJA':
            console.log(`${nome}: R$7,99 `);
            break;
        case '0':
            console.log(`Programa finalizado lindamente`);
            break;
        default:
            console.log(`Nome não encontrado`);
    }
} while (nome !== '0');
