// if (condicion a evaluar) {
//     accion a ejecutar si la condicion evaluada es verdadera
// } else if (nueva condicion a evaluar si la condicion anterior es falsa) {
//     accion a ejecutar si la condicion es verdadera
// } else {
//     accion por defecto, en caso que ninguna de las condiciones anteriores se cumpla, se ejecuta esta accion
// }

// condicion positiva
// if (true) {
//     console.log("hola");


// condicion negativa
// if (false) {
//     console.log("hola");
// } else {
//     console.log("soy falso");
// }



var edad = 18

if (edad === 18) {
    console.log("Puedes votar, sera tu 1era votación");
} else if (edad > 18) {
    console.log("puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}

// operador ternario: es generar un if y else en una sola linea
condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No soy un uno";



function juego (userSelection, npcSelection) {
    if (userSelection === npcSelection) {
        console.log("empate")
    }else if (userSelection == "piedra" && npcSelection == "tijera") {
        console.log("User wins");
    }else if (userSelection == "tijera" && npcSelection == "papel") {
        console.log("user wins");
    }else if (userSelection == "papel" && npcSelection == "piedra") {
        console.log("user wins")
    }else {
        console.log("npc wins")
    }
}


let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let user = prompt ("write rock paper or scissors");
let pc = prompt ("write rock paper or scissors");

function jugar (user, pc) {
    if (user === "rock" && pc ==="paper" || user === "paper" && pc ==="scissors" || user === "scissors" && pc ==="rock"  ) {
        alert("you lose")
    }else if (user === "rock" && pc ==="scissors" || user === "scissors" && pc ==="paper" || user === "paper" && pc ==="rock"  ) {
        alert("you win")
}
}

