// Para o botão de comprar, adicione um evento de clique. O nome do produto deve ser inserido em um array de lista de compras do usuário, ou seja, dar um ‘push’ do nome ou objeto produto (formado por nome e preço) na variável carrinho (array)

const carrinho = []

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

window.onload = () => {
    document.getElementById('inpNomeProduto').focus()
}

function clearInputs(){
    
    document.getElementById('inpNomeProduto').value = ''
    document.getElementById('inpPrecoProduto').value = ''
    document.getElementById('inpNomeProduto').focus()
}