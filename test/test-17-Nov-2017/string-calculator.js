/*Create a simple String calculator with a method int Add(string numbers):

    The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
    Start with the simplest output of an empty string and move to 1 and two numbers
    Remember to solve things as simply as possible so that you force yourself to write test scenarios you did not think about
    Remember to refactor after each successful output Allow the Add method to handle an unknown amount of numbers*/
function addString(string) {
    var arr = [];
    var array = Array.from(arguments);
    for (var i = 0; i < array.length; i++) {
        arr.push(array[i])
    }
    var changed = Number(arr);
    var sum = arr.reduce(function (a, b) {
        return a + b;
    });


    return sum;
}
console.log(addString("1", "2"))
console.log(addString("1", "2", "7"))
console.log(addString("1"))
console.log(addString(""))


