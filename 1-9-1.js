// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

let linkArray = [
    'http://facebook.com', 'amazon.com', 'google.kz', 'http://easternegg.com', 'http://1tv.ru', 'zvezda.ru'
];

// for(let i = 0; i < linkArray.length; i++) {
//     if(!linkArray[i].startsWith('http://')) {
//         linkArray[i] = '';
//     }
// }

// linkArray = linkArray.filter(Boolean);

// console.log(linkArray);

function maskChecker(a) {
    return a.startsWith('http://');
}

linkArray = linkArray.filter(maskChecker);

console.log(linkArray);