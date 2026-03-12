const prompt = require('prompt-sync')();

let input = prompt("Introduce una cadena de texto en la que aparezca tres veces la palabra 'mesa' ");

let pos1 = input.indexOf("mesa");
let pos2 = input.indexOf("mesa",pos1 + 1);
let pos3 = input.indexOf("mesa",pos2 + 1);

console.log("La primera palabra 'mesa' se encuentra en la posición", pos1 + 1);
console.log("La segunda palabra 'mesa' se encuentra en la posición", pos2 + 1);
console.log("La tercera palabra 'mesa' se encuentra en la posición", pos3 + 1);