const prompt = require('prompt-sync')();

let nombre = prompt("¿Cómo te llamas? ");
let apellido1 = prompt("¿Cuál es tu primer apellido? ");
let apellido2 = prompt("¿Cuál es tu segundo apellido? ");
let edad = prompt("¿Cuál es tu edad? ");
let peso = prompt("¿Cuántos kilos pesas? ");
let dni = prompt("¿Cuál es tu número de dni(sin la letra)? ");
let dniLetra = prompt("¿Cúal es la letra de tu DNI? ");

console.log("¡Hola!", nombre, apellido1, apellido2, "de", edad, "años, veo que pesas"
    , peso, "kilos y tu dni completo es", dni + dniLetra);