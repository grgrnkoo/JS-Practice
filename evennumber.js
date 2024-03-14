const maxNumber = 1000;
let randomNumber;

function getRandomNumber (var1) {
    return Math.floor(Math.random() * var1);
}

randomNumber = getRandomNumber(maxNumber);

function isEven(var2) {
    (var2 % 2 === 0) ? console.log(`${var2} is even`) : console.log(`${var2} is odd`);
}

isEven(randomNumber);