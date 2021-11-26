// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// primo passaggio chiedere all'utente per 10 volte di inserire un numero random
// poi fare la somma tra i numeri inseriti

// svolgimento con ciclo for 
let somma = 0;
for (let index = 9; index >=0 ; index--) {
    const numberUser = parseInt (prompt ('Scrivi un numero'));
    somma += numberUser;
    console.log(somma);
}

// svolgimento con ciclo while 
let somma = 0;
let contatore = 9;

while (contatore >= 0) {
    const numberUser = parseInt(prompt('Scrivi un numero'));
    somma += numberUser;
    console.log(somma);
    contatore--;
}

// /svolgimento con ciclo while 

