const prompt = require('prompt-sync')();
const pi = 3.1416;

let radio = parseFloat(prompt("Introduce el radio (en cm) de un círculo "));

console.log("El valor de su área es:", pi * radio ** 2, "cm^2");