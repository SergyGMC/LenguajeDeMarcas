const prompt = require('prompt-sync')();

let dias = parseInt(prompt("Introduce un número de días "));

let fechaFutura = new Date();
let hoy = new Date();
fechaFutura.setDate(hoy.getDate() + dias);

console.log("Transcurridos", dias, "días desde hoy la fecha será", fechaFutura.toString());