const prompt = require('prompt-sync')();

let input = prompt("Introduce una cadena de texto ");
let posicion = parseInt(prompt("Introduce una posición de dicha cadena (1 es la primera letra izquierda)"));

console.log("El caráctr en posición", posicion, "es", input.charAt(posicion - 1));