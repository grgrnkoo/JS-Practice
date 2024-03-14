const max = 100000;
let randomNumber1;
let randomNumber2;

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function firstDigit(number) {
    let strNumber = number.toString();
    return parseInt(strNumber.charAt(0));
}

randomNumber1 = getRandomNumber(max);
randomNumber2 = getRandomNumber(max);


console.log(randomNumber1);
console.log(randomNumber2);

(firstDigit(randomNumber1) === firstDigit(randomNumber2)) ? console.log("first digits are equal") : console.log("first digits differ");