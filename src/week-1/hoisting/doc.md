# Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

## Hoisting in var,let const :

#### How Var variable work in  Hoisting:
* var-declared variables are hoisted, meaning you can refer to the variable anywhere in its scope, even if its declaration isn't reached yet.
* You can see var declarations as being "lifted" to the top of its function or global scope.
* However, if you access a variable before it's declared, the value is always undefined, because only its declaration is hoisted, but not its initialization.

```
console.log(x === undefined); // true
var x = 3;
```
```
var x;
console.log(x)//undefined
x=10;
```
In var declared variable has no ***"temporal dead zone"*** because the varible declared is placed at top as gobal scope so, No reference error occur.

### How let variable work in  Hoisting:

```
console.log(a) //ReferenceError: Cannot access 'a' before initialization.
let a=10
```

* In the given example, it is demonstrated that a variable must be declared before it is called, unless it results in a reference error for let-declared variable.

```
let g;
console.log(x)//undefined
g=10;
```
* In the Given example, show Undefined error because the variable is already declared but the variable call before its initalization.
* In below example we can see how Temproal Dead Zone occurs in let variable .

```
{
  // TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood; // bestFood’s TDZ ends here
  console.log(bestFood); // returns undefined because bestFood’s TDZ does not exist here
  bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ does not exist here
  console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
}
```

### Temporal Dead Zone (TDZ):

The Temporal Dead Zone (TDZ) occurs when a variable in the lexical scope is accessed before its declaration, causing a reference error at that specific point in the code. Once the variable is declared later in the code, the TDZ ends, and the reference error no longer occurs.


### How const variable work in  Hoisting:

```
console.log(i) //ReferenceError: Cannot access 'a' before initialization.
const i=10
```
* In the given example, it is demonstrated that a variable must be declared before it is called, unless it results in a reference error for const-declared variable.


```
let j;
console.log(j)//SyntaxError: Missing initializer in const declaration
j=10;
```
* In the Given example, show  SyntaxError because the variable is  declared but the variable call before its initalization.
* In const-declare variable is only initialize where it is decalare.
```
const j=10;
console.log(j)
```

### Function hoisting:
* Hoisted functions can be used before their declaration.
* Function definition hoisting only occurs for function declarations, not function expressions. Function expressions are defined with a function as a variable.
* The definitions look like var b = function(). This kind of function declarations through expressions makes the function NOT Hoisted.
* As can be seen in the example below, function a is defined as a declaration, but function b is defined as an expression. So, when we call function b, it gives an error claiming that function b is not defined.
```
// This will work
a();

// This will throw an error
b();

// function declaration
function a() {
    console.log("This function is hoisted!");
}

// function expresssion
var b = function () {
console.log("This declaration makes function not hoisted!");
}
```
### Class hoisting:

* JavaScript classes too can be loosely classified either as:
1.Class declarations
2.Class expressions

#### Class declarations:
* Much like their function counterparts, JavaScript class declarations are hoisted. However, they remain uninitialised until evaluation. This effectively means that you have to declare a class before you can use it.
```
var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

class Hobbit {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}
```
* I’m sure you’ve noticed that instead of getting an undefined we get a Reference error. That evidence lends claim to our position that class declarations are hoisted.
* If you’re paying attention to your linter, it supplies us with a handy tip.
* Hobbit was used before it is declared, which is illegal for class variables.
* So, as far as class declarations go, to access the class declaration, you have to declare first.

```
class Hobbit {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: { height: 100, weight: 300 }
```
#### Class expressions:
* Much like their function counterparts, class expressions are not hoisted.
* Here’s an example with the un-named or anonymous variant of the class expression.
```
var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square); // Output: TypeError: Polygon is not a constructor

var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```
* Here’s an example with a named class expression.

```
var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square); // Output: TypeError: Polygon is not a constructor


var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```
* The correct way to do it is like this:
```
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square);
```
### Import Hoisting:

* In JavaScript, import statements for modules are subject to a mechanism called "hoisting" to some extent. However, it's important to note that the behavior is a bit different from the hoisting of variables and functions.


## Reference Link

[Function hoisting](https://www.educative.io/answers/what-is-function-hoisting-in-javascript)

[Class expressions](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript)








