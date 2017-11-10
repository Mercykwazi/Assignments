/*Write a multiply method which will perform correctly when called using either syntax below.

console.log(multiply(3,3));   //Output 9
console.log(multiply(3)(3));  // Outputs 9*/
function addition(a,b) {
    return a *b;
}
function addition2(val,val2){
    return val * val2;
}
function multiply(addition,addition2){
    return addition  * addition2;
}
  /*  var array =Array.from(arguments);
    var myVar = array.reduce(function (value,number) {
        return value * number;
    },)
    return myVar;
}*/
console.log(multiply(3)(3));