function spinalCase(str) {
 var myVar = str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().replace (/\s+|_/gi, "-");
  
  
  return myVar;
  
}

spinalCase('AllThe_small Things');
