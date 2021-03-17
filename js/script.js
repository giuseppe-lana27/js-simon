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
  while (userNumbers.length < 5){
    var userNumber = parseInt(prompt("Inserisci il numero che ricordi"));
    if ( isNaN(userNumber)){
      alert("Inserisci un valore numerico");
    } else if (userNumbers.includes(userNumber) == true){
      alert("Inserisci un altro numero");
    } else {
      userNumbers.push(userNumber);
    }
  }
  console.log(userNumbers);
  // 4. controllo quali e quanti numeri inseriti sono stati individuati tra quelli random
  var goodNumbers = [];
  for ( var j = 0; j < userNumbers.length; j++){
    if (randomNumbers.includes(userNumbers[j])){
      goodNumbers.push(userNumbers[j]);
    }
  }
  // 5. stampo il risultato del gioco
  if (goodNumbers.length != 0){
    alert("Hai indovinato i seguenti numeri: " + goodNumbers + " in tutto hai indovinato: " + goodNumbers.length + " numeri");
  } else {
    alert("Non hai indovinato nessuno dei numeri, ritenta!");
  }
}, 30000);
// funzione per generare numeri random
function randomNumbersGenerator(){
  return Math.floor(Math.random() * 100) + 1;
}
