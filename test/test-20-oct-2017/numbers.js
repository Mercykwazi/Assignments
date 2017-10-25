var number = [1, 2, 3,];
function numbers(num) {
    var arr = 0;
    var output = "";
    for (var i = 0; i < num.length; i++) {
        arr += num[i];
        if (arr > 0) {
            output = true;
        } else
            output = false;
    }
    return output

}
console.log(numbers(number))   
console.log(numbers(1,"a,",3))