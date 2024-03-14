// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

let linkArray = [
    'index.html', 'program.exe', 'main.html', 'logo.png', 'file.html'
];

function checkHtml(a) {
    return a.endsWith('.html');
}

linkArray = linkArray.filter(checkHtml);

console.log(linkArray);