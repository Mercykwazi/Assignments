function findElement(arr, func) {
return  arr && func();
}
console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }))