function findElement(arr, func) {
    function validate(num) {
        if (num % 2 === 0) {
            return num;
        };
    };
return  arr && func();
}
console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }))