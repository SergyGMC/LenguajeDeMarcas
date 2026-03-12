const prompt = require('prompt-sync')();

let input = prompt("Introduce tu nombre y apellidos separados por espacios. ");

let correo = input.toLowerCase().replace(/\s/g, ".") + "@al.colegiosangabriel.com";

console.log("Tu correo electrónico es", correo);