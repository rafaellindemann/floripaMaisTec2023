// Para o botão de comprar, adicione um evento de clique. O nome do produto deve ser inserido em um array de lista de compras do usuário, ou seja, dar um ‘push’ do nome ou objeto produto (formado por nome e preço) na variável carrinho (array)

// const carrinho = []
let carrinho = [
    // { nome: 'Feijão', preco: 5.99 },
    // { nome: 'Arroz', preco: 23.99 }
];

function adicionarAoCarrinho(e){
    e.preventDefault()
    console.log(e);

    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const produto = {
        nome: document.getElementById('inpNomeProduto').value,
        preco: Number(document.getElementById('inpPrecoProduto').value),
    }

    carrinho.push(produto)

    console.log(carrinho);
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    mostrarCarrinho()
    clearInputs();


}

function calcularTotalCarrinho(){

    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    if(carrinho.length > 0){
        const somatorioPrecos = carrinho.reduce((acumulador, item) => {
            return acumulador + item.preco;
        }, 0);
        // alert("Valor total do carrinho R$: " + somatorioPrecos.toFixed(2))
        return somatorioPrecos
    }

    return 0;

}


window.onload = () => {
    mostrarCarrinho();
    document.getElementById('inpNomeProduto').focus()

}

function clearInputs(){
    
    document.getElementById('inpNomeProduto').value = ''
    document.getElementById('inpPrecoProduto').value = ''
    document.getElementById('inpNomeProduto').focus()
}

function mostrarCarrinho(){
    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    if(carrinho.length == 0){
        document.getElementById('divCarrinho').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024"><path fill="black" d="M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80m-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80"/></svg>'
    }else{
        document.getElementById('divCarrinho').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024"><path fill="#db0000" d="M1015.66 284a31.822 31.822 0 0 0-25.999-13.502h-99.744L684.78 95.666c-24.976-24.976-65.52-25.008-90.495 0L392.638 270.498h-82.096l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.568 0-31.776 14.224-31.776 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.592 23.183h431.968c13.408 0 25.376-8.4 29.904-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM639.537 140.93l152.032 129.584H487.457zm175.488 579.263H429.538L328.386 334.065h616.096zm-63.023 127.936c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80m-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80s80-35.808 80-80s-35.808-80-80-80"/></svg>'
        document.getElementById('divCarrinho').innerHTML += `${carrinho.length} => R$${calcularTotalCarrinho().toFixed(2)}`;
    }
}