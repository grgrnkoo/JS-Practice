const max = 1000;
let randomNumber;

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function lastDigit(number) {
    let strNumber = number.toString();
    let numberLength = strNumber.length;
    return parseInt(strNumber.charAt(numberLength - 1));
}

randomNumber = getRandomNumber(max);
console.log(randomNumber);
console.log(lastDigit(randomNumber));