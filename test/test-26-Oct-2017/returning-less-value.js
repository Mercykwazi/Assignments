function Less(number) {
    this.number = number;

};
Less.prototype.comparative = function (array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < this.number) {
            arr.push(array[i]);
        }
    }
    return arr;
}
var number1 = new Less(14);
var number2 = new Less(18);

console.log(number1.comparative([1,2,4,5,23]))
console.log(number2.comparative([5,6,90,17,15,100]))


