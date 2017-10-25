


function Person(name) { 
    this.name = name; 
  }

  Person.prototype.greet = function (otherName) { 
      return "Hi " + otherName + ", my name is " + this.name; 
    }

 var person1 =new Person("Noel");
 var person2 =new Person("Sandile"); 

 console.log(person1.greet("Mercy"))
 console.log(person2.greet("Mercy"))