
function isItPerfectSquare(number) {
 
    var results = "";
    if (number % 2 === 0  || number % 5 ===0) {
        results = `${number} is a perfect square`;
    } else {
        results = `${number} its not a perfect square`;
    }

  

    return results;
}


console.log(isItPerfectSquare(4))