
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