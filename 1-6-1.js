// Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// Генератор массива

const taskArray = new Array();
const max = 100;

function getRandomNumber() {
    return Math.floor(Math.random() * max);
}

for(let i = 0; i < 5; i++) {
    taskArray.push(getRandomNumber());
}

console.log(taskArray);

// Задание

let sum = 0;

for(let i = 0; i < 5; i++) {
    sum += taskArray[i] ** 2; // Math.pow(taskArray[i], 2);
    console.log(taskArray[i] ** 2);
}

console.log('Sum of squares = ' + sum);