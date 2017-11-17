---
Layout: 
Title:  "out-put"
date:   2017-11-17 08:21:45 +0200
categories: 
---
The output of the code below will be undefined because:
The function has two variable containing age, the other one is declared outside the function while the other one is declared inside the function.
The moment the function is executed it will be executed line by line so it will first consider the variable that is outside the function.
When it reaches the second variable which is age again it will override the first one, but the console log is before the second variable, therefore, age is not defined at that point.

var age = 22;
var moreki = function () {
    console.log(age);
    var age = 27;
};

moreki();