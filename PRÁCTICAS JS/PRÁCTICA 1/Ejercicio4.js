const prompt = require('prompt-sync')();

let ancho = parseFloat(prompt("Introduce el ancho (en cm) de un rectángulo "));
let alto = parseFloat(prompt("Introduce el alto (en cm) de un rectángulo "));

console.log("El valor de su área es:", ancho * alto, "cm^2");