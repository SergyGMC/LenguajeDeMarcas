const prompt = require('prompt-sync')();

let input = prompt("Introduce una cadena de texto ");
let longitud = input.length;

console.log("Tu cadena de texto tiene", longitud, "caracteres");