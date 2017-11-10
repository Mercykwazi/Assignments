---
Layout: 
Title:  " code-explanation "
date:   2017-11-10 09:40
categories: 
---
# Code explanation.

The function will not return the same results,It will execute the first function results because:
The return statement of the first function(bragFirst) is inline with the return opening  curl carly.
There-for the second function(bragAgain) will return undefined because the return statement is before the opening carly brace.



console.log(bragFirst());
console.log(bragAgain());
