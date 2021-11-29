// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// script con ciclo for 
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
for (let counter = nameList.length - 1; counter >= 0; counter--) {
    if (nameUser == nameList[counter]) {
        boolean = true;
    }
}
console.log(boolean);
if (boolean == true) {
    console.log('Sei nella lista puoi entrare');
}
else
    console.log('Non sei nella lista non puoi entrare');

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
let counter = nameList.length - 1;

while ((counter >= 0) && (boolean=false)) {
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