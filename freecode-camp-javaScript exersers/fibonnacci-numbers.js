function sumFibs(num) {
    var prevNumber = 0;
    var currentNum = 1;
    var result = 0;
    while (currentNum <= num) {
        if(currentNum % 2 !== 0) {
        result += currentNum;
    }
     currentNum += prevNumber;
    prevNumber = currentNum - prevNumber;
    
}
  return result;
   

}
console.log(sumFibs(10))
console.log(sumFibs(4))