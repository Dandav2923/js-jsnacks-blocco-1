// alert('ciao');
// Crea un array vuoto.
//  Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

const containerOddNumber = [];
let index = 5;
let boolean = false;

for (index; index >= 0; index--) {
    const numberUser = parseInt(prompt ('Insrisci un numero'));
    if (numberUser % 2 == 1) {
        boolean = true;
        containerOddNumber.push(numberUser);
    }
    
}
console.log(containerOddNumber);