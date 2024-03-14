// Дано некоторое число: 12345 Выведите в консоль все его символы с конца.

const number = 12345;

let numberStr = number.toString();

for (let i = numberStr.length - 1; i >= 0; i--) {
    console.log(numberStr[i]);
}