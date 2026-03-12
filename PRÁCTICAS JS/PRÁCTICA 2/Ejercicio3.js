const prompt = require('prompt-sync')();

let input = prompt("Introduce una cadena de texto en la que aparezca dos veces la palabra 'mesa' ");

console.log("La primera palabra 'mesa' se encuentra en la posición", input.indexOf("mesa") + 1);
console.log("La segunda palabra 'mesa' se encuentra en la posición", input.lastIndexOf("mesa") + 1);
