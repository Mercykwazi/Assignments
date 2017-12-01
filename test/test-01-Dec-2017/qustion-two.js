/*Write a function that will return "And" if both the Conditions are met, "Or" if only one of the conditions are met or "None" if neither of the conditions are met.
 The function should take one argument and should check if it is an integer and if it is greater than 0. Name the function yourself.


ExampleFunction(1) = "And"

ExampleFunction(-1) = "Or"

ExampleFunction("a") = "None"*/

function whatIsIt(integer) {
    var results = "";
    if (integer > 0) {
        results = "And";
    } else if (integer < 0) {
        results = "Or"
    } else {
        results = "None"
    }
 
    return results;
}
console.log(whatIsIt("a"))//None
console.log(whatIsIt("-1"))//or
console.log(whatIsIt("67"))//And