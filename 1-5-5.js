// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

const someString = 'It will not be easy to list all symbols backwards';

for(i = someString.length - 1; i >= 0; i--) {
    console.log(someString[i]);
}

console.log('Just kidding. Took 1 min');