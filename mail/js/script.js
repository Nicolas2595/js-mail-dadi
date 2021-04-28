/*
1 - Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.
*/

// Chiedi all'utente la sua email
var mailUtente = prompt("Qual'è la tua email?");
console.log(mailUtente);

// Lista di chi può accedere
var mailList = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"];
console.log(mailList);

// Controlla che la mail sia nella lista di chi può accedere e stampa un messaggio appropriato sull'esito del controllo
var controlList = 0;

for (var i = 0; i < mailList.length; i++) {
    console.log(mailList[i]);
    
    if (mailList[i] === mailUtente) {
       controlList = 1;
    } 
}

if (controlList == 1) {
    document.getElementById("mail").innerHTML = "La mail " + mailUtente + " è nella lista";
} else {
    document.getElementById("mail").innerHTML = "La mail " + mailUtente + " non è nella lista";
}





