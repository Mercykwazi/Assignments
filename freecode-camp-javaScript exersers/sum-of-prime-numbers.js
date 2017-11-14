function isPrime(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
/*Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

*/
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