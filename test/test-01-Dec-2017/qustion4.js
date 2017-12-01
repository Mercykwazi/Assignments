function compare(array, number, string) {
    if (string === "GreaterOrEqual") {
        var filtered = array.filter(function (value) {
            return  value >= number;
        })
    } else if (string === "LessThan") {
        var filtered = array.filter(function (value) {
            return  value < number;
        })

    }

 return filtered;
}
console.log(isItGreat([1, 2, 3, 4, 5, 6, 7], 3, "GreaterOrEqual"))
console.log(isItGreat([1, 2, 3, 4, 5, 6, 7], 5, "LessThan"))