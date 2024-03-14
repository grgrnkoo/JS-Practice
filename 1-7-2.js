// Дано некоторое число: 12345 Получите массив цифр этого числа.

const someNumber = 12345;
let someArray = [];

let someString = someNumber.toString();

for(let i = 0; i < someString.length; i++) {
    someArray.push(someString[i]);
}

console.log(someArray);