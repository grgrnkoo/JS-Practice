// Даны два целых числа. Найдите остаток от деления первого числа на второе.

const max = 1000;

function getRandomNumber() {
    return Math.floor(Math.random() * max);
}

let firstNumber = getRandomNumber();
console.log('First number is: ' + firstNumber);

let secondNumber = getRandomNumber();
console.log('Second number is: ' + secondNumber);

console.log(firstNumber % secondNumber);