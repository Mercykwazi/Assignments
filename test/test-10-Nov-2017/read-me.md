---
Layout: 
Title: "Read-me"
date:   2017-11-10  09:40
categories: 
---
#                                       Read-me-file
## Today's activity:
### State the reasons why the following function will or not return the same results.

function bragFirst()

{
  return {
      brag: "Ska ba forgiva!"
  };
}

function bragAgain()
{
  return
  {
      brag: "Ska ba forgiva!"
  };
}

### Write a multiply method which will perform correctly when called using either syntax below.

console.log(multiply(3,3));   //Output 9
console.log(multiply(3)(3));  // Outputs 9

### What will be the output of the code bellow,and explain the output. 

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
