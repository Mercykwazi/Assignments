
function pairElement(str) {
    var basePairs = [['C', 'D'], ['D', 'C'], ['G', 'H'], ['H', 'G']];
    var secondArray = [];
    for (var i = 0; i < str.length; i++) {
        for (var x = 0; x < basePairs.length; x++) {
            if (str[i] === basePairs[x][0]) {
                secondArray.push(basePairs[x])
            }
        }
    }
    return secondArray
}
console.log("This is working")
console.log(pairElement('CMS'))
console.log(pairElement('FHB'))
console.log(pairElement('SMN'))
/*The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array.
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
