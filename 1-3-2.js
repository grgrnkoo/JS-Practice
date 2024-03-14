const max = 1000;

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

let randomNumber1 = getRandomNumber(max);
let randomNumber2 = getRandomNumber(max);

console.log(randomNumber1);
console.log(randomNumber2);

console.log(randomNumber1 % randomNumber2);

if(randomNumber1 % randomNumber2 === 0) {
    console.log('divides');
} else {
    console.log('do not divides');
}