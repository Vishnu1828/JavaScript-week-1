// Using object literal
var myObject = {};

// Using constructor function
function Person(name) {
  this.name = name;
}

var person1 = new Person("John");

var objectPrototype = Object.getPrototypeOf(myObject);

var person1 = new Person("John");
console.log(person1.constructor === Person); // true

function Animal() {
  this.eat = function () {
    console.log("Animal is eating.");
  };
}

function Dog() {
  this.bark = function () {
    console.log("Dog is barking.");
  };
}

Dog.prototype = new Animal();

var myDog = new Dog();
myDog.bark(); // Dog is barking.
myDog.eat(); // Animal is eating.
