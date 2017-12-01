/*Create a function that will return true if the second argument (string) is in the first argument (string). Please create your own name for the function, do not use the example.
someFunctionName('Perfect Practice Makes Perfect', 'Perfect') = True
someFunctionName('We should have a growth Mindset', 'Fixed') = False
*/
function isIt(str, str2) {
    for (var i = 0; i < str.length; i++) {
        for (var x = 0; x < str2.length; x++) {
            if (str[i] === str2[x]) {
                return true;
            }
        }
        return false;
    }

}
console.log(isIt("We should have a growth Mindset", "Fixed"))//false
console.log(isIt("Perfect Practice Makes Perfect", "Perfect"))//true
console.log(isIt("My name is Mercy","Mercy"))//true
console.log(isIt("This is the first flight to cape","that"))//true

