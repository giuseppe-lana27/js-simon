/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


// 1. inizializzo due array che conterranno i numeri casuali e quelli inseriti dall'utente
var randomNumbers = [];
var userNumbers = [];
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

// 2. mostro alert con i numeri da ricordare
alert("Questi sono i numeri da ricordare: " + randomNumbers);

// 3. dopo 30 secondi chiedo all'utente di inserire i numeri che aveva visualizzato
setTimeout(function () {
  for ( var i = 0; i < 5; i++){
    var userNumber = parseInt(prompt("Inserisci il numero che ricordi"));
    if ( isNaN(userNumber)){
      userNumber = parseInt(prompt("Inserisci il numero che ricordi in valore numerico"));
      userNumbers.push(userNumber);
    } else {
      userNumbers.push(userNumber);
    }
  }
  console.log(userNumbers);
}, 5000);








// funzione per generare numeri random
function randomNumbersGenerator(){
  return Math.floor(Math.random() * 100) + 1;
}
