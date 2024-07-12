const readline = require('readline/promises');
const Autor = require('./classes/Autor');
const AutorCrud = require('./classes/AutorCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':
            /* Coloque sua resposta aqui  */
            const nome = await rl.question('Digite o nome do autor: ');
            const generoLiterario = await rl.question('Digite o gênero literário do autor: ');

            const autor = new Autor(nome);
            autor.setGeneroLiterario = generoLiterario

            const crud = new AutorCrud();
            // console.log('autor antes de mandar: ',autor);
            crud.criar(autor);

            rl.close();
            break;
        case 'deletar': {
            /* Coloque sua resposta aqui */
            rl.close();
            break;
        }
        case 'consultar': {
            /* Coloque sua resposta aqui */
            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
