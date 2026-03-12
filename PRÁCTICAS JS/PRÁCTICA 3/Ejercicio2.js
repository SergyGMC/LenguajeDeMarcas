const prompt = require('prompt-sync')();

let year = prompt("Introduce el año de la fecha futura ");

let month = prompt("Introduce el mes numérico de la fecha futura (0 para enero, 1 para febrero,...) ");

let day = prompt("Introduce el día de la fecha futura ");

let fechaFutura = new Date(year, month, day);
let fechaHoy = new Date();

let diferenciaDias = fechaFutura - fechaHoy;
let milisegundosDia = 1000 * 60 * 60 * 24;
let diasRestantes = Math.ceil(diferenciaDias/milisegundosDia);

console.log("Quedan", diasRestantes, "días para alcanzar tu fecha futura");