

var data =[1, 3, 6,1];
function arrHasDuplication(interger) {
    for (i = 0; i < interger.length; i++) {
        for (j = i + 1; j < interger.length; j++) {
            if (interger[i] == interger[j]) 
                return true;
             }
            return false;

       
    }
}
console.log(arrHasDuplication(data));
