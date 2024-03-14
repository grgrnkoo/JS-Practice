// Дана некоторая строка. Найдите позицию первого нуля в строке.

const str = 'fefoclwmfoiwnccmco0niwend0cecne0';

for(let i = 0; i < str.length; i++) {
    if (str[i] == 0) {
        console.log(i);
        break;
    }
}