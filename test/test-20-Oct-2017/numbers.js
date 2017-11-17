function numbers(arr) {
    var results=[];
    var array = Array.from(arguments);
    for (var i = 0; i < array.length; i++) {
        if (typeof (array[i]) === 'number') {
            results.push(array[i]);
        }
    }
    return  results.length ==array.length? true:false;
}
console.log(numbers(1, 4, 3, 2, 5)); // true
console.log(numbers(1, "a", 3));// false
console.log(numbers(1, 2, NaN));// true
