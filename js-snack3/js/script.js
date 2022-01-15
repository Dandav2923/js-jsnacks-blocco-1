// alert ('ciao');
// Crea due array che hanno un numero di elementi diversi.
//  Aggiungi elementi all’array che ha meno elementi
//  fino a quando ne avrà tanti quanti l’altro.

// creiamo i 2 array 
let lista1 = [1,2,3];
let lista2 = [1,2,3,4,5,6,7];

let lunghezzaLista1 = lista1.length;
let lunghezzaLista2 = lista2.length;

while (!(lunghezzaLista1 == lunghezzaLista2)) {
    if (lunghezzaLista1 > lunghezzaLista2) {
        lista2.push(lista2[lunghezzaLista2 -1] + 1);
    } else if (lunghezzaLista2 > lunghezzaLista1) {
        lista1.push(lista1[lunghezzaLista1 - 1] + 1);
    }

}

console.log(lista1);
console.log(lista2);