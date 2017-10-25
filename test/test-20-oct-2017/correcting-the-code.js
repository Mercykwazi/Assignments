
function Person(name) {
  this.name = name;
}

function greet(otherName) {
  return "Hi " + otherName + ", my name is " + this.name;
}

Person.prototype.greet = greet;
var person1 = new Person("mercy");
var person2 = new Person("Sandile")


console.log(person1.greet("kwazi"));
console.log(person1.greet("Noel"));
console.log(person2.greet("Noel"));


