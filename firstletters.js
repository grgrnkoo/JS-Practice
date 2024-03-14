const firstWord = 'Butter';
const secondWord = 'Bread';

function getFirstLetter(word) {
    return word.charAt(0);
}

console.log(getFirstLetter(firstWord));
console.log(getFirstLetter(secondWord));

getFirstLetter(firstWord) === getFirstLetter(secondWord) ? console.log('Letters are equal') : console.log('Letters differ');