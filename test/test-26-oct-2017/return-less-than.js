function returnLessThan(array, number) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < number) {
            arr.push(array[i]);
        }
    }
    return arr;
}




console.log(returnLessThan([1, 2, 3, 4, 10], 9))
