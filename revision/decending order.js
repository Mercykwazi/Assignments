
function descendingOrder(num) {
    var array = num.toString().split("").sort().reverse();
    return array.join("");

}

console.log(descendingOrder(29372));