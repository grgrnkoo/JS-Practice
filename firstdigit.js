const maxNumber = 1000;
let randomNumber;

function getRandomNumber (var1) {
    return Math.floor(Math.random() * var1);
}

randomNumber = getRandomNumber(maxNumber);

function getFirstDigit(number) {
    let stringNumber = number.toString();
    let firstDigit = stringNumber.charAt(0);
    return parseInt(firstDigit);
}

console.log(getFirstDigit(randomNumber));