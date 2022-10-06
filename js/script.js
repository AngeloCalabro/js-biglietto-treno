/*

chiedere all'utente il numero di km da percorrere
chiedere età del passeggero
calcolare prezzo totale del viaggio, seguendo queste regole:
- 0.21€ al km
- sconto 20% per minorenni
- sconto 40% per over 65

prezzo finale con massimo due decimali

*/


// const now = new Date();

let kmUtente = parseInt(prompt("Inserire il numero di km da percorrere"));
let etaUtente = parseInt(prompt("Inserire l'età del passeggero"));
console.log(kmUtente, etaUtente);

const prezzoKm = 0.21;
console.log(prezzoKm);

const kmEuroPercorsi = parseFloat(prezzoKm * kmUtente);
console.log(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(kmEuroPercorsi));

const sconto_20 = ((kmEuroPercorsi / 100) * 20);
const sconto_40 = ((kmEuroPercorsi / 100) * 40);
console.log(sconto_20, sconto_40);


if (isNaN(kmUtente) || isNaN(etaUtente)) {
    alert('sbagliato, metti un numero')
};

const minorenne = 18;
const over_65 = 65;
if (etaUtente < minorenne) {
    console.log('sconto 20%')

} else if (etaUtente > over_65) {
    console.log('sconto 40%')

} else if (etaUtente > minorenne || etaUtente < over_65) {
    console.log('no sconto')
}