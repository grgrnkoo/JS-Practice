const max = 100000000;
let randomNumber;

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

getLength = (number) => {
    let strNumber = number.toString();
    return strNumber.length;
}

randomNumber = getRandomNumber(max);
console.log(randomNumber);
console.log(getLength(randomNumber));

