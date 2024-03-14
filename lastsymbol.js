let stringOne = 'Hello! My name is Oleg!';
let lastNumber;

function getLength(stringOne) {
    return stringOne.length;
}

lastNumber = getLength(stringOne) - 1;

console.log(stringOne.charAt(lastNumber));