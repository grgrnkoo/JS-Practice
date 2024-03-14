let max = 1000;
let randomNumber;

function getRandomNumber(max) {
    let positiveRandom = Math.floor(Math.random() * max);
    let negativeRandom = Math.floor(Math.random() * max) * (-1);
    return positiveRandom + negativeRandom;
}

function isNegative(randomNumber) {
    (randomNumber > 0) ? console.log('Number is positive') : console.log('Number is negative or 0');
}

randomNumber = getRandomNumber(max);
isNegative(randomNumber);
console.log(randomNumber);