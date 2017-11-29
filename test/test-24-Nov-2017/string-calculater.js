function addInt(string) {
    if (string == "") {
        return 0;
    } else {
        if (/(\d).(\d)/.exec(string) || /(-\d)/.exec(string)) {
            var numbers = string.match(/(-\d)|(\d)[.](\d)|(\d)(\d)|([0-9])/g);
        }
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] < 0) {
                var message = `Negative numbers not allowed: ${numbers}`;
                throw Error(message);
            }
        }
        var sum = numbers.reduce(function (a, b) {
            return Number(a) + Number(b);
        });
        return sum;
    }
}



console.log(addInt("1,2"))
console.log(addInt("10,17"))
console.log(addInt(""))
console.log(addInt("1\n2,3"));
console.log(addInt("//;\n2;6;9"))
console.log(addInt("//,\n2.5,2.2"))
console.log(addInt("-1,-2"))



