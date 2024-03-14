let russianWord = 'Свиристель';

function getLastChar(str) {
    str.charAt(str.length - 1) === 'ь' ? console.log(str.charAt(str.length - 2)) : console.log(str.charAt(str.length - 1));
}

getLastChar(russianWord);