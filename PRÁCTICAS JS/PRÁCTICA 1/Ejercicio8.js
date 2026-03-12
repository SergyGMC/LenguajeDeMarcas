const prompt = require('prompt-sync')();

let cantidadRepartir = parseInt(prompt("Introduce la cantidad a repartir de manera directamente proporcional "));

let a = parseInt(prompt("Introduce la primera cantidad entre la que repartir "));
let b = parseInt(prompt("Introduce la segunda cantidad entre la que repartir "));
let c = parseInt(prompt("Introduce la tercera cantidad entre la que repartir "));

let constanteProporcionalidad = cantidadRepartir / (a+b+c);

console.log("A la cantidad", a, "le corresponde:", a*constanteProporcionalidad);
console.log("A la cantidad", b, "le corresponde:", b*constanteProporcionalidad);
console.log("A la cantidad", c, "le corresponde:", c*constanteProporcionalidad);
