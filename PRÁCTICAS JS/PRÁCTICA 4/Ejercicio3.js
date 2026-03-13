const prompt = require('prompt-sync')();

let input = parseInt(prompt("Introduce un número entero del 1 al 7 "));

if (input >= 1 && input <= 7) {
    if (input == 1) {
        console.log("El número", input, "se corresponde con el día de la semana lunes");
    } else if (input == 2) {
        console.log("El número", input, "se corresponde con el día de la semana martes");
    } else if (input == 3) {
        console.log("El número", input, "se corresponde con el día de la semana miércoles");
    } else if (input == 4) {
        console.log("El número", input, "se corresponde con el día de la semana llueves");
    } else if (input == 5) {
        console.log("El número", input, "se corresponde con el día de la semana viernes");
    } else if (input == 6) {
        console.log("El número", input, "se corresponde con el día de la semana sábado");
    } else {
        console.log("El número", input, "se corresponde con el día de la semana domingo");
    }
} else {
    console.log("ERROR");
}