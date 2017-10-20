var convertToRoman = function(num) {

  var decimalNumbers = [  1000, 900, 500, 400,100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [  'M', 'CM', 'D', 'CD','C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var i = 0; i < decimalNumbers.length; i++) {
    decimalNumbers[i] <= num 
      romanized += romanNumeral[i];
      num -= decimalNumbers[i];
    }
  

  return romanized;
};
console.log(convertToRoman(36));

