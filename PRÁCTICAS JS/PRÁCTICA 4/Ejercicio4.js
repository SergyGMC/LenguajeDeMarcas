const prompt = require('prompt-sync')();

let input = parseInt(prompt("Introduce una calificación del 0 al 10 "));

if (input >= 1 && input <= 10) {
    if (input == 10) {
        console.log("Tu calificación se corresponde con una matrícula de honor");
    } else if (input >= 9 && input < 10) {
        console.log("Tu calificación se corresponde con un sobresaliente");
    } else if (input >= 7 && input < 9) {
        console.log("Tu calificación se corresponde con un notable");
    } else if (input >= 6 && input < 7) {
        console.log("Tu calificación se corresponde con un bien");
    } else if (input >= 5 && input < 6) {
        console.log("Tu calificación se corresponde con un aprobado");
    } else {
        console.log("Tu calificación se corresponde con un suspenso");
    }
} else {
    console.log("ERROR");
}