const max = 1000;
let randomNumber;

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function firstDigit(number) {
    let strNumber = number.toString();
    return parseInt(strNumber.charAt(0));
}

function lastDigit(number) {
    let strNumber = number.toString();
    let numberLength = strNumber.length;
    return parseInt(strNumber.charAt(numberLength - 1));
}

randomNumber = getRandomNumber(max);
console.log(randomNumber);
console.log('First and last digits sum = ' + (firstDigit(randomNumber) + lastDigit(randomNumber)));