
let listaExercicios = []

function getExercises(){
    fetch("https://api.api-ninjas.com/v1/exercises?type=stretching&offset=20",{
        method: 'GET',
        headers: { 'X-Api-Key': ''},
        contentType: 'application/json',
    })
    .then(response => response.json())
    .then(dados =>{
        listaExercicios = dados
        console.log(listaExercicios);
    })
    .catch(error => console.log(error))
}

getExercises()