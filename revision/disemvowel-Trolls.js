/*A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".*/
function removeVowels(string) {
    var array = [];
    for (var counter = 0; counter < string.length; counter++) {

        var characterString = string[counter];

        if (characterString != "a" && characterString != "e" && characterString != "i" || characterString != "o" || characterString != "u") {
            array.push(characterString)
        }
    }

    return array;
}
console.log(removeVowels("mercy"))
