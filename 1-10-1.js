// Заполните массив случайными числами из промежутка от 1 до 100.

const max = 100;
let arrOne = [];

function getRandomNumber() {
    return Math.floor(Math.random() * max);
}

for(let i = 0; i < 10; i++) {
    arrOne.push(getRandomNumber());
}

console.log(arrOne);