/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


// 1. inizializzo un array che conterrà i numeri casuali
var randomNumbers = [];
// inserisco i numeri random nell'array
while (randomNumbers.length < 5){
  var number = randomNumbersGenerator();
  if (randomNumbers.includes(number)){
    number = randomNumbersGenerator();
  } else {
    randomNumbers.push(number);
  }
}
console.log(randomNumbers);

// funzione per generare numeri random
function randomNumbersGenerator(){
  return Math.floor(Math.random() * 100) + 1;
}
