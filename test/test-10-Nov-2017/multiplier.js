/*Write a multiply method which will perform correctly when called using either syntax below.

console.log(multiply(3,3));   //Output 9
console.log(multiply(3)(3));  // Outputs 9*/
function multiply(number) {
    var array =Array.from(arguments);
    var myVar = array.reduce(function (value,number) {
        return value * number;
    },)
    return myVar;
}
console.log(multiply(3)(3));