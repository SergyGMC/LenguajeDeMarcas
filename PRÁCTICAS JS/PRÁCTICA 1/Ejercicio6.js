const prompt = require('prompt-sync')();

let chicos = parseInt(prompt("Introduce el número de chicos que hay en clase "));
let chicas = parseInt(prompt("Introduce el número de chicas que hay en clase "));

let total = chicos + chicas;
let porcentajeChicos = (100 * chicos) / total;
let porcentajeChicas = 100 - porcentajeChicos;

console.log("Hay un", porcentajeChicos + "% de chicos");
console.log("Hay un", porcentajeChicas + "% de chicas");