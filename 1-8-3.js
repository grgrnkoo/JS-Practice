// Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.

let taskArray = [1.456, 2.125, 3.32, 4.1, 5.34];

for(let i = 0; i < taskArray.length; i++) {
    taskArray[i] = taskArray[i].toFixed(1);
}

console.log(taskArray);