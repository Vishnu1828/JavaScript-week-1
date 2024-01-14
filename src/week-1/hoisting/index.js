// Variable Hoisting
console.log(x === undefined); // true
// didn't initalize Variable
var x = 3;

var x;
console.log(x); //undefined
x = 10;

console.log(a); //ReferenceError: Cannot access 'a' before initialization.
let a = 10;

let g;
console.log(g); //undefined
// didn't initalize Variable
g = 10;

console.log(i); //ReferenceError: Cannot access 'a' before initialization.
const i = 10;

let j;
console.log(j); //SyntaxError: Missing initializer in const declaration
j = 10;

const v = 10;
console.log(v);

//Function hoisting:
// This will work
get();

// This will throw an error
// getb(); function expression Cannot access before it declaration

// function declaration
function get() {
  console.log("This function is hoisted!");
}

// function expresssion
var getb = function () {
  console.log("This declaration makes function not hoisted!");
};
getb(); // it work now
