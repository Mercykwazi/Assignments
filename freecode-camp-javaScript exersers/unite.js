function uniteUnique(arr) {
  var emptyArray=[];
  var array = Array.from(arguments);
  var newArray =array.reduce(function(value,values){
   return value.concat(values);},[]);
  for(var i =0;i<newArray.length;i++){
    if(emptyArray.indexOf(newArray[i]) === -1){
      emptyArray.push(newArray[i]);
    }
  }
  return emptyArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
