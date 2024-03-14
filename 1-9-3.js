// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

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

for(let i = 0; i < taskArray.length; i++) {
    taskArray[i] = taskArray[i] + taskArray[i] * 0.1;
    taskArray[i].toFixed(2);
}

console.log(taskArray);