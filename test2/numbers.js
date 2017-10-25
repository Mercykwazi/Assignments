function numbers(arr) {
    var array = Array.from(arguments);
    for (var i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "string") {

            return false;
        }

    }
    return true;
}
console.log(numbers(1, 4, 3, 2, 5)); // true
console.log(numbers(1, "a", 3));// false
console.log(numbers(1, 2, NaN));// false
// 3. Write a function named numbers that returns true if all the parameters it is passed are of the Number type. Otherwise, the function should return false. The function should accept any number of parameters.

//   Example usage:

// numbers(1, 4, 3, 2, 5); // true

// numbers(1, "a", 3); // false

// numbers(1, 3, NaN); // true
//1 write a function named numbers.
