
function isIt(str, str2) {
    if(str.indexOf(str2)!==-1){
        return true
    }
        return false;

}
console.log(isIt("We should have a growth Mindset", "Fixed"))//false
console.log(isIt("Perfect Practice Makes Perfect", "Perfect"))//true
console.log(isIt("My name is Mercy","Mercy"))//true
console.log(isIt("This is the first flight to cape","is"))//true

