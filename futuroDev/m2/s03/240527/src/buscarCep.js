async function buscarInfosDoCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        
        if (data.erro) {
            console.log('CEP não encontrado');
            return null;
        }
        
        return data;
    } catch (error) {
        console.log('Erro ao buscar CEP:', error.message);
        return null;
    }
}

module.exports = { buscarInfosDoCep };


// async function buscarInfosDoCep(cep) {
//   const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
//     .then(async response => await response.json())
//     .then(data => {
//         // console.log('Endereço: ',data)
//         if(data.erro){
//             console.log('CEP não encontrado')
//             return null;
//         }
//         return data;
//     })
//     .catch(() => {  
//         console.log('Erro ao buscar CEP, deu ruim! Pagou a internet?!')
//         return null;
//      })
// }

// module.exports = {  buscarInfosDoCep };

