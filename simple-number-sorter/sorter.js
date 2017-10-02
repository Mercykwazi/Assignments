var array = [0, -3, 2, 4];
function myfunction(arr) {
    var results = [4,2,0,-3];
    arr = Array.from(arguments);

    for (var i = 0; i < arr.length; i++); {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]);


        };

        return results;
    };
}
console.log(myfunction(array));