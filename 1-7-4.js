// Дано некоторое число: 12345 Найдите сумму цифр этого числа.

const someNumber = 12345;
let sum = 0;
let someString = someNumber.toString();

for(i = 0; i < someString.length; i++) {
    let digit = parseInt(someString[i]);
    sum += digit;
}

console.log(sum);