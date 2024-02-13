
let avisos = document.getElementById('divAvisos')

function executarExercicio01(){
    avisos.innerHTML = "Hello World! <br>Não deixe de verificar o console :D"
    console.log("Ex01: Hello World!");
}
function executarExercicio02(){
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
    let string1 = 'Combine duas strings usando o operador de concatenação e exiba o resultado no console.'
    let string2 = 'Utilize o template string ou a concatenação simples.'
    console.log(`Ex03: ${string1} ${string2}`)
    avisos.innerHTML = `Ex03: ${string1} ${string2}`
}
function executarExercicio04(){
    let n1 = Number(document.getElementById('ex04n1').value)
    let n2 = Number(document.getElementById('ex04n2').value)
    let soma = n1 + n2

    console.log(`Ex04: ${n1} + ${n2} = ${soma}`)
    avisos.innerHTML = `Ex04: ${n1} + ${n2} = ${soma}`
}