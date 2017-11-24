function addInt(string) {
    var spited = string.split(',');
    var arr = [];

    for (var i = 0; i < spited.length; i++) {
        arr.push(spited[i])
        if (arr[i] == "") {
            return 0;
        };
    }
    var sum = arr.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    });
    return sum;
}
console.log(addInt("1,2"))
console.log(addInt(""))
console.log(addInt("89,99,1777"))