var list = (1, 2, 3, 4);
function lastItem(item) {
    var array = Array.from(arguments);
    array.slice(array[array.length - 1]);
    if (item.length == undefined) {
        return array[0]
    } else {
        return array[0][array[0].length-1];
    }


}

console.log(lastItem(list))
console.log(lastItem([1, 2, 3, 4]))