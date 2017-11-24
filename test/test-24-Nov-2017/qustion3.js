function addInt(string) {
   var newLine = string.replace(/\n/g, ",");
   var spited = newLine.split(',');
   var matched = spited.match(/d/g)


    for (var i = 0; i < spited.length; i++) {
        if (spited[i] == "") {
            return 0;

        };
    }
    var sum = spited.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    });

    return matched;
}
console.log(addInt("1,2"))
console.log(addInt(""))
console.log(addInt("1\n2,3"));
   