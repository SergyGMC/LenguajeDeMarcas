const prompt = require('prompt-sync')();

let year = prompt("Introduce tu año de nacimiento ");

let month = prompt("Introduce tu mes numérico de nacimiento (0 para enero, 1 para febrero,...) ");

let day = prompt("Introduce tu día de nacimiento ");

let nacimiento = new Date(year, month, day);

console.log("0 - Domingo, 1 - Lunes, 2 - Martes, 3 - Miércoles, 4 - Jueves, 5 - Viernes, 6 - Sábado");
console.log("Tu fecha de nacimiento cae en", nacimiento.getDay());