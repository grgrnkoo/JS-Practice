// Дана строка: 'abcde' Получите массив букв этой строки.

const taskString = 'abcde';
let taskArray = [];

for(let i = 0; i < taskString.length; i++) {
    taskArray.push(taskString[i]);
}

console.log(taskArray);