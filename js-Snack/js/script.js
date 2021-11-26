// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// primo passaggio chiedere all'utente per 10 volte di inserire un numero random
// poi fare la somma tra i numeri inseriti

// svolgimento con ciclo for 
// let somma = 0;
// for (let index = 9; index >=0 ; index--) {
//     const numberUser = parseInt (prompt ('Scrivi un numero'));
//     somma += numberUser;
//     console.log(somma);
// }

// svolgimento con ciclo while 
// let somma = 0;
// let contatore = 9;

// while (contatore >= 0) {
//     const numberUser = parseInt(prompt('Scrivi un numero'));
//     somma += numberUser;
//     console.log(somma);
//     contatore--;
// }

// /svolgimento con ciclo while 

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// script con ciclo for 
// const nameUser = prompt('Inserisci il tuo nome');
// const nameList = [
//  'daniele',
//  'chiara',
//  'fulvio',
//  'meme',
//  'sara',
//  'valerio',
//  'christian',
//  'fabio',
//  'francesco'
// ];

// let boolean = false;
// for (let counter = nameList.length - 1; counter >= 0; counter--) {
//     if (nameUser == nameList[counter]) { 
//         boolean = true;
//     }
// }
// console.log(boolean);
// if (boolean == true) {
//     console.log('Sei nella lista puoi entrare');
// } 
// else 
//     console.log('Non sei nella lista non puoi entrare');

// script con il ciclo while 

const nameUser = prompt('Inserisci il tuo nome');
const nameList = [
    'daniele',
    'chiara',
    'fulvio',
    'meme',
    'sara',
    'valerio',
    'christian',
    'fabio',
    'francesco'
];
let boolean = false;
let counter = nameList.length -1;

while (counter >= 0) {
    if (nameUser == nameList[counter]) {
        boolean = true;
    }
    counter--;
}
if (boolean == true) {
    console.log('Sei nella lista puoi entrare');
}
else 
    console.log('Non sei nella lista non puoi entrare');