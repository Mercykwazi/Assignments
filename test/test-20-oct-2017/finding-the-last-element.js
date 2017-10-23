
function findingLastElement(list) {
    var results = " ";
    var array = Array.from(arguments);

    if(list.length == undefined){
        results = array[array.length - 1];
    }else{
        results = list[list.length -1];
    }
    return results;
}
console.log(findingLastElement(( "xyz" )))
console.log(findingLastElement((  1,2,3,4)))
console.log(findingLastElement([1,2,3,4]))
