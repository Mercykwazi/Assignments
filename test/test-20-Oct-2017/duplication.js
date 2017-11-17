
function isThereDuplication(value) {

    var values = Array.from(arguments);
    values.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < values.length; i++) {
        for (var x = 1; x < values.length; x++) {
            if (values[i] == values[x]) {
                return true;
            
             
            }

        }
           return false;
    }

}


console.log(isThereDuplication(1, 3, 4,1))


console.log(isThereDuplication(1, 3, 4))


