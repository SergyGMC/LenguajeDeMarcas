const prompt = require('prompt-sync')();

let input = prompt("Introduce una cadena de texto");

let pos1 = parseInt(prompt("Introduce una posición inicial (1 es la primera letra izquierda)"));
let pos2 = parseInt(prompt("Introduce una posición final (1 es la primera letra izquierda)"));

let subcadena = input.substring(pos1, pos2);

console.log("La subcadena de texto de '", input, "' entre la posición inicial", pos1, "y la posición final", pos2, "es", subcadena);