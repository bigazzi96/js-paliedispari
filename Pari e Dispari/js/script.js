let oddOrEven = prompt('pari o dispari').trim().toLowerCase();
while (oddOrEven !== 'pari' && oddOrEven !== 'dispari'){
     oddOrEven = prompt('pari o dispari').trim().toLowerCase();
}

 let userNumber = Number.parseInt(prompt('scegli un numero da 1 a 5').trim(), 10);
 while ( Number.isNaN(userNumber) || userNumber < 1 ||  userNumber > 5 ){
 userNumber = Number.parseInt(prompt('scegli un numero da 1 a 5').trim(), 10);
 }

 console.log(`L'utente ha scelto ${oddOrEven}, e il numero ${userNumber}`);

 const aINumber = getRandomInt(1, 5);
 const sum = userNumber + aINumber;

 console.log(`Il computer ha generato ${aINumber}, e la somma dei due numeri e' ${sum}`);

 let result;

if( isEven(sum) === true ){
    result = 'pari';
 } else {
    result = 'dispari';
 }

 if( isOdd(sum) === false ){
     result = 'pari';
 } else {
     result = 'dispari';
}

 if (result === oddOrEven){
     console.log('L\'utente vince');
 } else {
     console.log('Il computer vince');
 }
