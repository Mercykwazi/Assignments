     function sumAll(arr) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var results= 0;
    for (var i=min; i <= max; i++){
      results += i;
    }
  return(results);
}

console.log(sumAll([1, 4]));