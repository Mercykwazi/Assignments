function commonMultiple(array) {
    var sorted = array.sort();
    var arr = [];
    var first = array[0];
    var second = array[1];
    var multiple = second;

    function isValidMultiple(first,second,multiple){
        for(var index = first; index <= second;index ++){
            arr.push(index);
            if(multiple % index !== 0){
                return false
            }
        }
        return false
    }
    While(!isValidMultiple(first,second,multiple));{
        multiple += second;
    }

    
}
console.log(commonMultiple([1, 5]))
/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.*/