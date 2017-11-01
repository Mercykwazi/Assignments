
function isItPerfectSquare(number) {
  results = ""
  if (number % Math.sqrt(number)===0) {
    results = `${number} is a perfect square`;
  }else{
   results = `${number} its not a perfect square`;
  }

  return results;
}


