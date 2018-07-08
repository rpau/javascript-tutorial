
let readlineSync = require('readline-sync');
 

let firstNumber = readlineSync.question('First number: ');
let secondNumber = readlineSync.question('Second number: '); 

addNumbers(Number(firstNumber), Number(secondNumber));

function addNumbers(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}
                    
