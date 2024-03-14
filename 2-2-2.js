// Дан массив с числами. Оставьте в нем только положительные числа.

// Генератор массива

let taskArray = new Array();
const max = 100;

function getRandomNumber() {
    return (Math.floor(Math.random() * max) - Math.floor(Math.random() * max));
}

for(let i = 0; i < 5; i++) {
    taskArray.push(getRandomNumber());
}

console.log(taskArray);

// Задание

const isPositive = (a) => a > 0;

taskArray = taskArray.filter(isPositive);

console.log(taskArray);