## Object prototype:

In JavaScript, the prototype is a fundamental concept related to object-oriented programming. Each object in JavaScript has a prototype, which serves as a template or blueprint for that object. The prototype is essentially an object from which other objects inherit properties and methods.

### Object Creation:

When you create an object using either object literals or the **_new_** keyword with a constructor function, the new object inherits properties and methods from its prototype.

```
// Using object literal
var myObject = {};

// Using constructor function
function Person(name) {
  this.name = name;
}

var person1 = new Person('John');
```

### Prototype Property:

Every object in JavaScript has a prototype property, which refers to another object. You can access an object's prototype using the **_Object.getPrototypeOf()_** method.

```
var myObject = {};
var objectPrototype = Object.getPrototypeOf(myObject);
```

### Constructor Property:

The prototype object has a **_constructor_** property, which points back to the constructor function that was used to create the object.

```
function Person(name) {
  this.name = name;
}

var person1 = new Person('John');
console.log(person1.constructor === Person); // true
```

### Prototype Chain:

If a property or method is not found on an object, JavaScript looks for it in the object's prototype. If it's not found there, it continues to look up the prototype chain until it reaches the end.

```
function Animal() {
  this.eat = function () {
    console.log('Animal is eating.');
  };
}

function Dog() {
  this.bark = function () {
    console.log('Dog is barking.');
  };
}

Dog.prototype = new Animal();

var myDog = new Dog();
myDog.bark(); // Dog is barking.
myDog.eat();  // Animal is eating.
```

### Object.create():

The **_Object.create()_** method allows you to create a new object with a specified prototype.

```
var animal = {
  eat: function () {
    console.log('Animal is eating.');
  }
};

var myDog = Object.create(animal);
myDog.bark = function () {
  console.log('Dog is barking.');
};

myDog.bark(); // Dog is barking.
myDog.eat();  // Animal is eating.
```
