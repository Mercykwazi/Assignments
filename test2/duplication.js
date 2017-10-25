/*4. Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function. The solution should implement the most optimal algorithm possible.

solution(1, 2, 3) // returns false

solution(1, 2, 3, 2) // returns true

solution('1', '2', '3', '2') // returns true

The array values passed in will only be strings or numbers. The only valid return values are true and false.
*/
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


