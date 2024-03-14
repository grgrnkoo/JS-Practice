// Дана некоторая строка. Найдите позицию третьего нуля в строке.

const str = 'enfnoi0cmsm0rjvneisr0knnrvv0';
let counter = 0;

for (let i = 0; i < str.length; i++) {
    if(str[i] === '0') {
        counter++;
        if (counter === 3) {
            console.log(i);
            break;
        }
    }
}