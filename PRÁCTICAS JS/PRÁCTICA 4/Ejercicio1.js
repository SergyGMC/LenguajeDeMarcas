const prompt = require('prompt-sync')();

let input = parseInt(prompt("Introduce un número real "));

if (input > 0) {
    console.log("El número", input, "es positivo");
} else if (input < 0 ) {
    console.log("El número", input, "es negativo");
} else {
    console.log("El número", input, "es cero");
}