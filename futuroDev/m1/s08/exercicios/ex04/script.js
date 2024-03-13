[]
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

    for(i=0; i<botoes.length; i++) {
        if(!botoes[i].innerText.includes('Main')){

            botoes[i].innerText = 'Main >> ' + botoes[i].innerText
        }
    }

    // botoes.forEach((bt) => {
    //     bt.innerText += 1
    // });
}

function criarBotao(){
    do{
        var cor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }while(cor.length != 7)
    // console.log(cor.length)
    
    bt = document.createElement('button'); 
    bt.setAttribute('class', 'botoes')
    bt.setAttribute('onclick', `definirCor('${cor}')`);
    bt.innerText = cor
    bt.style.backgroundColor = cor
    document.getElementById('menu').appendChild(bt);
    
    // console.log(cor);
    
    // <button class="botoes" onclick="selecionarVerde()" id="btVerde">Verde</button>
}

function definirCor(cor){
    
    document.getElementById('conteudo').style.backgroundColor = cor
}

function removerBotao(){

    let aside = document.getElementById('menu');
    // let ultimoFilho = aside.lastChild;
    let ultimoFilho = aside.lastElementChild;

    console.log(ultimoFilho);
    if(ultimoFilho != null){
        aside.removeChild(ultimoFilho);
    }else{
        alert("Sem filhos para remover!")
    }
}