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



function alterarPorClasse(){
    var elementos = document.querySelectorAll('.botoes, .botoes-branco');
    console.log(elementos);
    elementos.forEach((elemento) => {
        if(elemento.classList.contains('botoes')){
            elemento.classList.remove('botoes');
            elemento.classList.add('botoes-branco');
        } else {
            elemento.classList.remove('botoes-branco');
            elemento.classList.add('botoes');
        }
    });
}

// function alterarPorClasse() {
//     var elementos = document.querySelectorAll('.botoes, .botoes-branco');

//     elementos.forEach((elemento) => {
//         if (elemento.style.color === 'black' || elemento.style.color === '') {
//             elemento.style.color = 'white';
//         } else {
//             elemento.style.color = 'black';
//         }
//     });
// }

// function acrescentarClasse(){
//     var elementos = document.querySelectorAll('.botoes, .botoes-branco');
//     // console.log(elementos);

//     do{
//         let n = Math.floor(Math.random()*elementos.length)
//         elementos[n].classList.add('destaque')

//     }while([...elementos[n].classList].indexOf('destaque') != -1)
    
//     console.log([...elementos[n].classList].indexOf('destaque'));

// }

function acrescentarClasse(){
    // let elementos = document.querySelectorAll('.botoes, .botoes-branco');
    let elementos = document.querySelectorAll('.botoes:not(.destaque), .botoes-branco:not(.destaque)');
    console.log(elementos);
    if(elementos.length > 0){
        let n = Math.floor(Math.random()*elementos.length)
        elementos[n].classList.add('destaque')
    }else{
        alert("Quando todos são destaques, nenhum está realmente destacado...")
    }
}

function removerClasse(){
    var elementos = document.querySelectorAll('.destaque');
    console.log(elementos);

    if(elementos.length > 0){
        let n = Math.floor(Math.random()*elementos.length)
        elementos[n].classList.remove('destaque')
    }else{
        alert("Nenhum destaque encontrado!")
    }
}

function desabilitarBotaoDeCriacao(){

    document.getElementById('btCriar').setAttribute('disabled', 'true');
}

function removerAtributo(){

    document.getElementById('btCriar').removeAttribute('disabled');
}

