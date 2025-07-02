// ciclo for per stampare numeri da 1 a 100
for(let i = 1; i <= 100; i++){

  // definizione variabile
  let nameReplacement = i
  
  // stampo 'FizzBuzz' al posto dei multipli sia di 3 che di 5
  if (i % 5 == 0 && i % 3 == 0) {
    nameReplacement = "FizzBuzz"
  }

  // stampo 'Buzz' al posto dei multipli di 5
  else if (i % 5 == 0) {
    nameReplacement = "Buzz"
  }

  // stampo il tutto
  console.log(nameReplacement)
}



