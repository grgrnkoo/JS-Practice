// Дана строка. Удалите предпоследний символ из этой строки.

let str = 'I need to delete this symbol -> !.';

str = str.slice(0, -2) + str.slice(-1);

console.log(str);