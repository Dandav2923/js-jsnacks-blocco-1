// alert ('ciao');
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

const numberUser = parseInt(prompt('Inserisci i numeri di cui vuoi sapere il valore elevato al cubo'));
for (let i = 0; i < numberUser; i++) {
    const cubo = Math.pow(i, 3);
    console.log(cubo);
}