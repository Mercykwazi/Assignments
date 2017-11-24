function addInt(string) {
    var spited = string.split(',');
    var arr = [];
    for (var i = 0; i < spited.length; i++) {
        arr.push(spited[i])
           if (arr[i] == "") {
            return 0;
        };
    }
}
console.log(addInt("1,2"))