// console.log('Hello World!');

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

const hoje = new Date();
console.log(hoje);

const dia = new Date().toLocaleDateString();
console.log(dia);

const hora = new Date().toLocaleTimeString();
console.log(hora);

const diaHora = new Date().toLocaleString();
console.log(diaHora);

const diaHoraUTC = new Date().toUTCString();
console.log(diaHoraUTC);

const diaHoraISO = new Date().toISOString();
console.log(diaHoraISO);

const diaHoraJSON = new Date().toJSON();
console.log(diaHoraJSON);

const agora = new Date().getTime()
console.log(agora);

