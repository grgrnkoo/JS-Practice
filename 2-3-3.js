// Даны числа, разделенные запятыми:

// '12,34,56'
// Найдите сумму этих чисел.

let str = '12,34,56,10';
sum = 0;
let counter = 0;

// Defining all numbers separated by commas
for (let i = 0; i < str.length; i++) {
    if(str[i] === ',') {
        sum += Number(str.slice(counter, i));
        counter = i+1;
    }
}

// Defining last number
for(i = str.length-1; i >= 0; i--) {
    if(str[i] === ',') {
        sum += Number(str.slice(i+1, str.length));
        break;
    }
}

console.log(sum);