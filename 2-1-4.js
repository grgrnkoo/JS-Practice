// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

const arr = [1, 2, 3, 4, 5, 6];
sum = 0;

for (let i = 0; i < Math.ceil(arr.length/2); i++) {
    sum += arr[i];
    console.log(arr[i]);
}

console.log(sum);