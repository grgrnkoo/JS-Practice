// Дано некоторое число: 12345 Переверните его: 54321

let someNumber = 12345;
let someArray = [];

let someString = someNumber.toString();
let secondString = '';

for(let i = 0; i < someString.length; i++) {
    secondString += someString[someString.length - 1 - i];
}

someNumber = parseInt(secondString);

console.log(someNumber);