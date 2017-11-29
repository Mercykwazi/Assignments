function addString(string) {
    var spited = string.split(',');
    var numbers = string.match(/(-[0-9])|([0-9])/g);
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


    return spited;
}
console.log(addString(""))
console.log(addString("1,2"))
console.log(addString("1"))
console.log(addString("10,23"))
