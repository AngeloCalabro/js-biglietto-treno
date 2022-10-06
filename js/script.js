/*

chiedere all'utente il numero di km da percorrere
chiedere età del passeggero
calcolare prezzo totale del viaggio, seguendo queste regole:
- 0.21€ al km
- sconto 20% per minorenni
- sconto 40% per over 65

prezzo finale con massimo due decimali

*/

let data = new Date();
let gg, mm, aaaa;
gg = data.getDate() + "/";
mm = data.getMonth() + 1 + "/";
aaaa = data.getFullYear();
let writeDate = gg + mm + aaaa;

console.log(writeDate)
document.getElementById('date_add').innerHTML = writeDate;

// let kmUtente = parseInt(prompt("Inserire il numero di km da percorrere"));
// let etaUtente = parseInt(prompt("Inserire l'età del passeggero"));
console.log(kmUtente + ` km`, etaUtente + ` età`);

document.getElementById('km_around').innerHTML = kmUtente;

if (isNaN(kmUtente) || isNaN(etaUtente)) {
    alert('Hai sbagliato, metti un numero')
};

const prezzoKm = 0.21;
console.log(prezzoKm + ` prezzo al km`);

const kmEuroPercorsi = parseFloat(prezzoKm * kmUtente);

const minorenne = 18;
const over_65 = 65;
if (etaUtente < minorenne) {
    const sconto_20 = ((kmEuroPercorsi / 100) * 20);
    console.log('sconto 20%')
    let prezzoScontato_20 = kmEuroPercorsi - sconto_20
    console.log(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(prezzoScontato_20));

} else if (etaUtente > over_65) {
    const sconto_40 = ((kmEuroPercorsi / 100) * 40);
    console.log('sconto 40%')
    let prezzoScontato_40 = kmEuroPercorsi - sconto_40
    console.log(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(prezzoScontato_40));

} else {
    console.log('no sconto')
    console.log(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(kmEuroPercorsi));

}