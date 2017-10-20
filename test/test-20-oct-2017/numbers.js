var number = [1, 2, 3, NaN];
function numbers(num) {
    var arr = 0;
    var output = "";
    for (var i = 0; i < num.length; i++) {
        arr += num[i];
        if (arr > 1) {
            output = true;
        } else
            output = false;
    }
    return output

}
console.log(numbers(number))   
