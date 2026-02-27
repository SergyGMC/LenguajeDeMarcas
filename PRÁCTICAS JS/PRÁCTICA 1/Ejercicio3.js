const prompt = require('prompt-sync')();

let base = parseInt(prompt("Introduce la base de la potencia "));
let exponente = parseInt(prompt("Introduce el exponente de la potencia "));

console.log(base, "elevado a", exponente, "=", base ** exponente);