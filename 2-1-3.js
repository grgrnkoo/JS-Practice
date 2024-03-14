// Дан массив. Удалите из него элементы с заданным значением.

let arr = [1, 2, 3, 4, 2, 4, 2];
let toDelete = 2;

function isToDelete(a) {
    return (a !== toDelete);
}

arr = arr.filter(isToDelete);

console.log(arr);