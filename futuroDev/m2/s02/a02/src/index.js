let pessoa = {
    nome: "Ana",
    idade: 30
};



const teste3 = true;

const novoObjeto = Object.assign({}, 
    teste3 && { teste1: 'Deu certo' }, 
    
    );

    console.log(novoObjeto);