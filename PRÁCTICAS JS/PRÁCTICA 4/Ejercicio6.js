const prompt = require('prompt-sync')();

let input = prompt("Introduce una cadena de texto ");

let posicion1 = parseInt(prompt("Introduce una posición inicial (1 es la primera letra izquierda) "));
let posicion2 = 0;

if (posicion1 < 1 || posicion1 > input.length) {
    console.log("ERROR");
} else {
    posicion2 = parseInt(prompt("Introduce una posición final (1 es la primera letra izquierda) "));
    if (posicion2 < 1 || posicion2 > input.length) {
        console.log("ERROR");
    } else {
        let substring = input.substring(posicion1 - 1, posicion2);
        console.log("La subcadena de texto de", input, "entre la posición inicial", posicion1,
            "y la posición final", posicion2, "es", substring
        );
    }
}