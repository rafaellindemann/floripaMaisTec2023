// Para o botão de comprar, adicione um evento de clique. O nome do produto deve ser inserido em um array de lista de compras do usuário, ou seja, dar um ‘push’ do nome ou objeto produto (formado por nome e preço) na variável carrinho (array)

// const carrinho = []
const carrinho = [
    { nome: 'Feijão', preco: 5.99 },
    { nome: 'Arroz', preco: 23.99 }
];

function adicionarAoCarrinho(e){
    e.preventDefault()
    console.log(e);

    // carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const produto = {
        nome: document.getElementById('inpNomeProduto').value,
        preco: Number(document.getElementById('inpPrecoProduto').value),
    }

    carrinho.push(produto)

    console.log(carrinho);

    clearInputs();

}

function calcularTotalCarrinho(){
    const somatorioPrecos = carrinho.reduce((acumulador, item) => {
        return acumulador + item.preco;
    }, 0);
    alert("Valor total do carrinho R$: " + somatorioPrecos.toFixed(2))
}


window.onload = () => {
    document.getElementById('inpNomeProduto').focus()
}

function clearInputs(){
    
    document.getElementById('inpNomeProduto').value = ''
    document.getElementById('inpPrecoProduto').value = ''
    document.getElementById('inpNomeProduto').focus()
}