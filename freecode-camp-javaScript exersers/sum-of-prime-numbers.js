function isPrime(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function sumPrime(num) {
    var array = [];
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            array.push(i);
        }
    } var sum = array.reduce(function (a, b) {
        return a + b;
    }, 0)
    return sum;

}
console.log(sumPrime(10))