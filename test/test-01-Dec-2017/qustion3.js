/*Write a function that takes 3 arguments, an array of numbers, a number and a string that will either be "GreaterOrEqual" or "LessThan" and return an array of numbers where the numbers are Greater Or Equal if the third argument is "GreaterOrEqual", or less than if the third argument is "LessThan". Give an appropriate name for the function.
This function should use a for loop.


ExampleFunction([1,2,3,4,5,6,7], 3, "GreaterOrEqual") = [3,4,5,6,7]

ExampleFunction([1,2,3,4,5,6,7], 5, "LessThan") = [1,2,3,4]*/
function isItGreat(array, number, string) {
    var results = []
    for (var i = 0; i <= array.length; i++) {
        if (string === "GreaterOrEqual") {
           if((array[i] >= number) === true){
               results.push(array[i]);
           }
        } else if (string === "LessThan") {
            if((array[i] <= number) === true){
               results.push(array[i]);
           }
            
        }
    }
    return results;
}
console.log(isItGreat([1, 2, 3, 4, 5, 6, 7], 3, "GreaterOrEqual"))
console.log(isItGreat([1, 2, 3, 4, 5, 6, 7], 5, "LessThan"))
