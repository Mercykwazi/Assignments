function addInt(string) {
    if (string == "") {
        return 0;
    } else {
        var numbers = string.match(/(-[0-9])|([0-9])/g);
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] < 0) {
               return   Error("negatives not allowed")
            }
        }
        var sum = numbers.reduce(function (a, b) {
            return parseInt(a) + parseInt(b);
        });
        return sum;
    }
}



console.log(addInt("1,2"))
console.log(addInt("-1,-2"))
console.log(addInt(""))
console.log(addInt("1\n2,3"));
console.log(addInt("1//;n2,3"));
//console.log(addInt("1,n"));
