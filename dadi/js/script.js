/*
2 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Generare un  numero random da 1 a 6 per il giocatore
var numeroGiocatore = Math.floor(Math.random() * 6);
console.log("Numero random giocatore ", numeroGiocatore);
document.getElementById("numero_giocatore").innerHTML = "Numero giocatore: " + numeroGiocatore;

// Generare un numero random da 1 a 6 per il computer
var numeroComputer = Math.floor(Math.random() * 6);
console.log("Numero random computer ", numeroComputer);
document.getElementById("numero_computer").innerHTML = "Numero computer: " + numeroComputer;

// Stabilire il vincitore
if (numeroGiocatore > numeroComputer) {
    alert("Ha vinto il giocatore!");
} else if (numeroGiocatore == numeroComputer) {
    alert("Avete pareggiato!");
} else {
    alert("Hai perso!");
}
