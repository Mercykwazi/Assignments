function findElement(arr, func) {
    function validate(num) {
        if (num % 2 === 0) {
            return num;
        };
    };
    var checker = arr.filter(validate)
    return checker[0];
}
console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }))