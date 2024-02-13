


function executarExercicio01(){
    let avisos = document.getElementById('divAvisos01')
    avisos.innerHTML = "Hello World! <br>Não deixe de verificar o console :D"
    console.log("Ex01: Hello World!");
}
function executarExercicio02(){
    let avisos = document.getElementById('divAvisos02')
    let numero = Number(prompt("Digite um número:"))
    if(!isNaN(numero)){
        console.log(`Ex02: Valor da variável: ${numero}`);
        avisos.innerHTML = `Ex02: Valor da variável: ${numero}`;
    }else{
        console.log(`Ex02: O valor digitado não é um número`);
        avisos.innerHTML = `Ex02: Ops, você não digitou um número...`;
    }
}
function executarExercicio03(){
    let avisos = document.getElementById('divAvisos03')
    let string1 = 'Combine duas strings usando o operador de concatenação e exiba o resultado no console.'
    let string2 = 'Utilize o template string ou a concatenação simples.'
    console.log(`Ex03: ${string1} ${string2}`)
    avisos.innerHTML = `Ex03: ${string1} ${string2}`
}
function executarExercicio04(){
    let avisos = document.getElementById('divAvisos04')
    let n1 = Number(document.getElementById('ex04n1').value)
    let n2 = Number(document.getElementById('ex04n2').value)
    let soma = somar(n1, n2)

    console.log(`Ex04: ${n1} + ${n2} = ${soma}`)
    avisos.innerHTML = `Ex04: ${n1} + ${n2} = ${soma}`
}
function somar(n1, n2){
    return n1 + n2
}

function executarExercicio05(){
    let avisos = document.getElementById('divAvisos05')
    let n = Number(document.getElementById('ex05n1').value)
    let resultado
    if(n > 0){
        resultado = 'positivo'
    }else{
        if(n < 0){
            resultado = 'negativo'
        }else{
            resultado = 'zero'
        }
    }
    console.log(`Ex05: O número digitado é ${resultado}`)
    avisos.innerHTML = `Ex05: O número digitado é ${resultado}`
}
function executarExercicio06(){
    let avisos = document.getElementById('divAvisos06')
    // Crie 3 objetos com propriedades representando informações pessoais (nome, idade, nacionalidade e profissão) e exiba essas informações com um console.log para cada objeto.
    const pessoa0 = {
        nome: 'Zeroberto',
        idade: '55',
        nacionalidade: 'Brasileiro',
        profissao: 'Preparador'
    }
    const pessoa1 = {
        nome: 'Humberto',
        idade: '25',
        nacionalidade: 'Uruguaio',
        profissao: 'Queijeiro'
    }
    const pessoa2 = {
        nome: 'Doisberto',
        idade: '33',
        nacionalidade: 'Brasileiro',
        profissao: 'Bicheiro'
    }

    console.log(`Ex06: `)
    console.log(`pessoa0`)
    console.log(pessoa0)
    console.log(`pessoa1`)
    console.log(pessoa1)
    console.log(`pessoa2`)
    console.log(pessoa2)

    let p = document.createElement('p')
    p.innerText = 'Ex06'
    avisos.appendChild(p)

    p = document.createElement('p')
    p.innerText = `-Pessoa0 = Nome: ${pessoa0.nome}; Idade: ${pessoa0.idade}; Nacionalidade: ${pessoa0.nacionalidade}; Profissão: ${pessoa0.profissao}`
    avisos.appendChild(p)

    p = document.createElement('p')
    p.innerText = `-Pessoa1 = Nome: ${pessoa1.nome}; Idade: ${pessoa1.idade}; Nacionalidade: ${pessoa1.nacionalidade}; Profissão: ${pessoa1.profissao}`
    avisos.appendChild(p)

    p = document.createElement('p')
    p.innerText = `-Pessoa2 = Nome: ${pessoa2.nome}; Idade: ${pessoa2.idade}; Nacionalidade: ${pessoa2.nacionalidade}; Profissão: ${pessoa2.profissao}`
    avisos.appendChild(p)
}

function executarExercicio07(){
    let avisos = document.getElementById('divAvisos07')
    let hora = Number(document.getElementById('ex07hora').value)
    let resultado
    if(hora < 25){
        if(hora>=6 && hora<12 ){
            resultado = 'Bom dia!'
        }else{
            if(hora>=12 && hora<19){
                resultado = 'Boa tarde!'
            }else{
                resultado = 'Boa noite!'
            }
        }
    }else{
        resultado = 'inválido'
    }

    console.log(`Ex07: ${resultado}`)
    avisos.innerHTML = `Ex07: ${resultado}`
}
function executarExercicio08(){
    let avisos = document.getElementById('divAvisos08')
    let n = Number(document.getElementById('ex08n').value)
    let resultado
    if(n != ''){
        if(n%2==0){
            resultado = 'par'
        }else{
            resultado = 'ímpar'
        }
    }else{
        resultado = 'inválido'
    }

    console.log(`Ex08: O número digitado é ${resultado}`)
    avisos.innerHTML = `Ex08: O número digitado é ${resultado}`
}
function executarExercicio09(){
    let avisos = document.getElementById('divAvisos09')
    let n = Number(document.getElementById('ex09n').value)
    switch(n){
        case 1: avisos.innerHTML = "Janeiro"
        console.log('Janeiro')
        break
        case 2: avisos.innerHTML = "Fevereiro"
        console.log('Fevereiro')
        break
        case 3: avisos.innerHTML = "Março"
        console.log('Março')
        break
        case 4: avisos.innerHTML = "Abril"
        console.log('Abril')
        break
        case 5: avisos.innerHTML = "Maio"
        console.log('Maio')
        break
        case 6: avisos.innerHTML = "Junho"
        console.log('Junho')
        break
        case 7: avisos.innerHTML = "Julho"
        console.log('Julho')
        break
        case 8: avisos.innerHTML = "Agosto"
        console.log('Agosto')
        break
        case 9: avisos.innerHTML = "Setembro"
        console.log('Setembro')
        break
        case 10: avisos.innerHTML = "Outubro"
        console.log('Outubro')
        break
        case 11: avisos.innerHTML = "Novembro"
        console.log('Novembro')
        break
        case 12: avisos.innerHTML = "Dezembro"
        console.log('Dezembro')
        break
        default: avisos.innerHTML = "Valor incorreto!"
        console.log('Valor incorreto!')
    }
}

function executarExercicio10(){
    let avisos = document.getElementById('divAvisos10')
    let idade = Number(document.getElementById('ex10n').value)
    if(idade >= 18){
        avisos.innerHTML = 'Maior de idade'
        console.log('Maior de idade');
    }else{
        avisos.innerHTML = 'Menor de idade'
        console.log('Menor de idade');

    }
}