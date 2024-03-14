// Заполните массив четными числами из промежутка от 1 до 100.

let taskArray = [];

for(i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        taskArray.push(i);
    }
}

console.log(taskArray);