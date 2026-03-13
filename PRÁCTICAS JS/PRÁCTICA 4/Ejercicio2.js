const prompt = require('prompt-sync')();

let input = parseInt(prompt("Introduce un número entero "));

if (input % 2 == 0){
    console.log("El número", input, "es par");
} else {
    console.log("El número", input, "es impar");
}
