const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("¿Introduce un número decimal?"));
let num2 = parseFloat(prompt("Introduce otro número decimal"));

console.log("Su suma es:", num1 + num2);
console.log("Su diferencia es;", num1 - num2);
console.log("Su producto es:", num1 * num2);
console.log("Su cociente es:", num1 / num2);
