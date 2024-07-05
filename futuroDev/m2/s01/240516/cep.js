const readline = require('readline');
const fs = require('fs');

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

let cep = '';
input.question('Digite o CEP: ', (cepDigitado) => {
    if(cepDigitado.length === 8){
    // if(true){ // pra testar o catch, deixar dar erro pra ver o catch funcionando
        cep = cepDigitado;
        console.log(`CEP digitado: ${cep}`);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            // .then(response => response.json())
            .then(response => {
                if(response.ok){
                    // console.log('response: ', response);
                    console.log('status: ', response.status); // pra ver qual é
                    return response.json();
                }else{
                    throw new Error('CEP inválido');
                }
                // response.json()
            })
            .then(data => {
                if(data.erro){ // api respondeu com sucesso (200) mas o CEP não foi encontrado
                    throw new Error();
                }
                console.log(`Logradouro: ${data.logradouro}`);
                console.log(`Bairro: ${data.bairro}`);
                console.log(`Localidade: ${data.localidade}`);
                console.log(`UF: ${data.uf}`);

                fs.writeFileSync('endereco.json', JSON.stringify(data));
                fs.writeFileSync('endereco.txt', `
                    Bairro: ${data.bairro}
                    Logradouro: ${data.logradouro}  
                    Localidade: ${data.localidade}
                    UF: ${data.uf}
                    `);
            })
            .catch(error => console.error('Erro ao buscar CEP:', error));
    }
    input.close();
});