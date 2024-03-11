
function selecionarRosa(){
    document.getElementById('conteudo').style.backgroundColor = '#ff00ff'
}
function selecionarAmarelo(){
    document.getElementById('conteudo').style.backgroundColor = '#ff0'
}
function selecionarVerde(){
    document.getElementById('conteudo').style.backgroundColor = '#0f0'
}

function alterarBotoes(){
    botoes = document.getElementsByClassName('botoes');

    console.log(botoes);

    botoes.forEach((bt) => {
        bt.innerText += 1
    });
}