const prompt = require('prompt-sync')();

let input = prompt("Introduce una cadena de texto ");
let posicion = parseInt(prompt("Introduce una posición de dicha cadena (1 es la primera letra izquierda) "));

if (posicion < 1 || posicion > input.length) {
    console.log("ERROR");
} else {
    let char = input.charAt(posicion - 1);
    console.log("El carácter en posición", posicion, "es", char);
}