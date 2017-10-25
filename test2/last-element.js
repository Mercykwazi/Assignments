

function lastElement(last) {
    var array = Array.from(arguments);
    if (last.length != undefined && array.length == 1) {
        return last[last.length - 1]
    } else {
        return array[array.length - 1]
    }
}
console.log(lastElement([1,2,3,4]))
console.log(lastElement(1,2,3,4))
console.log(lastElement("xyz"))

