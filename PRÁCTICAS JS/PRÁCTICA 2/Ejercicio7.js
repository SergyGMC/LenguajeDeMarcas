const prompt = require('prompt-sync')();

let input = prompt("Introduce una cadena de txto formada por tres palabras en minúsculas ");

let palabras = input.split(" ");

let resultado = "";

for (let i = 0; i < palabras.length; i++) {
    resultado += palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1) + " ";
}

resultado = resultado.trim();

console.log("Tu cadena de texto con letras iniciales mayúsculas es", resultado);