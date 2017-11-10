---
Layout: 
Title:  " code-output "
date:   2017-11-10 09:40
categories: 
---
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
This code will return 10; and 2 the reason being:
Obj.method()is executed outside the global scope there for it will retain 10;
Then it will retain 2 because of the number of arguments that are passed in the  function.

