
function Person(name, otherName) {
    this.name = name;
    this.otherName = otherName;
}

function greet(otherName){
  return "Hi " + this.otherName + ", my name is " + this.name;
}

Person.prototype.greet = greet;
var person1 = new Person("mercy", "kwazi");
var person2= new Person("Sandile","Noel")


console.log(person1.greet());
console.log(person2.greet());


