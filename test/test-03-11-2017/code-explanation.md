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
        getFullname: function() {
            return this.name;
        }
    }
};

## My Explanation 
This code will output Adam Back,because this uses parent scoping.
In this case the parent scoping of name is prop so the name under prop belongs to Adam Back.