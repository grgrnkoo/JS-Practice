const taskArray = new Array();
const max = 100;
let counter = 0;

function getRandomNumber() {
    return (Math.floor(Math.random() * max) - Math.floor(Math.random() * max));
}

for(let i = 0; i < 5; i++) {
    let a = getRandomNumber()
    taskArray.push(a);
    if (a < 0) {
        counter++;
    }
}

console.log(taskArray);
console.log(counter);

