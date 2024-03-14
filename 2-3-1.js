// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

const word1 = 'Abracadabra';
const word2 = 'Aezakmi';

console.log(word1[word1.length-1].toLowerCase() === word2[0].toLowerCase());