---
layout: 
title:  "Explaining the code"
date:   2017-11-03   08:21:45 +0200
categories: 
---

## Instructions
Writing the output of the following code:
var name = "Vitalik Buterin";
var obj = {
    name: 'Satoshi Nakamoto',
    prop: {
        name: 'Adam Back',
        getFullName: function() {
            return this.name;
        }
    }
};
console.log(obj.prop.getFullName());

var fullName=obj.prop.getFullName();
console.log(fullName);

## My Explanation 
The first console log will print the results Adam Back because of this which take the parent function which is prop and the second 
The second console log will also print out Adam Back because it is still under the scoping of prop
