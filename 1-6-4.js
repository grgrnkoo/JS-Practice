// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

// Генератор массива

const taskArray = new Array();
const max = 100;

function getRandomNumber() {
    return (Math.floor(Math.random() * max) - Math.floor(Math.random() * max));
}

for(let i = 0; i < 5; i++) {
    taskArray.push(getRandomNumber());
}

console.log(taskArray);

// Задание

let sum = 0;

for(let i = 0; i < 5; i++) {
    if(taskArray[i] > 0 && taskArray[i] < 10) {
        sum += taskArray[i];
        console.log(taskArray[i]);
    }
}

console.log('Sum is ' + sum);