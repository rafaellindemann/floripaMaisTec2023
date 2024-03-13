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

    // for(i=0; i<botoes.length; i++) {
    //     if(!botoes[i].innerText.includes('Main')){

    //         botoes[i].innerText = 'Main >> ' + botoes[i].innerText
    //     }
    // }

    botoes = [...botoes]
    botoes.forEach((bt) => {
        if(!bt.innerText.includes('Main')){
            bt.innerText = 'Main >> ' + bt.innerText

        }
    });
}

function criarBotao(){
    var cor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    bt = document.createElement('button'); 
    bt.setAttribute('class', 'botoes')
    bt.setAttribute('onclick', `definirCor('${cor}')`);
    bt.innerText = cor
    bt.style.backgroundColor = cor
    document.getElementById('menu').appendChild(bt);
    
    console.log(cor);
    
    // <button class="botoes" onclick="selecionarVerde()" id="btVerde">Verde</button>
}

function definirCor(cor){
    
    document.getElementById('conteudo').style.backgroundColor = cor
}