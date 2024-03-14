// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

const arr = [1, 2, 3, 4, 5, 6];
let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < Math.ceil(arr.length/2); i++) {
    sum1 += arr[i];
}

for (let i = arr.length-1; i >= Math.ceil(arr.length/2); i--) {
    sum2 += arr[i];
}

console.log(sum1/sum2);