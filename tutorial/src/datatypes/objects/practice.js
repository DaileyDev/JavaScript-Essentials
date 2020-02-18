// What is an object?

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

// Syntax for an object literal
const objName = {
    name: "value"
  }
  
  console.log(objName);
  
  // Properties
  const person = {
    name: "Jane",
    age: 25,
    location: "United States",
    school: "Lambda School",
    "last name": "Doe"
  }
  
  console.log(person);
  
  // Access properties with dot Notation
  console.log(person.name);
  console.log(person.age);
  console.log(person["last name"]);
  
  // Access properties with bracket Notation
  console.log(person['location']);
  console.log(person['school']);
  
  // Object Methods
  const student = {
    name: "Jane",
    age: 25,
    location: "United States",
    school: "Lambda School",
    study: function(topic) {
      console.log(`${this.name} likes to study ${topic}`);
    }
  }
  
  // invoke methods with dot Notation
  student.study("code");
  
  // invoke methods with bracket Notation
  student['study']("code");
  
  // Create object methods outside of the object literal!
  student.play = function(activity){
    console.log(`${this.name} loves to ${activity}`);
  }
  
  student.play("swim");
  
  // Object literals gain all the methods available to objects:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  
  // Object Methods: entries
  console.log(Object.entries(student));
  
  // Access entry data
  console.log(Object.entries(student)[1]);
  
  // Access Keys only
  console.log(Object.keys(student));
  
  // Access Values only
  console.log(Object.values(student));
  