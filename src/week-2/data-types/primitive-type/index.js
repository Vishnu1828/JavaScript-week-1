var a = 3.14; // Declare and initialize a variable
var b = a; // Copy the variable's value to a new variable

console.log(a === b); //Display true because the variable a and b have same value

a = 4; // Modify the value of the original variable

console.log(b); // Displays 3.14; the copy has not changed
console.log(a); //Displays 4; the copy has not changed

console.log(a === b); //Display false because the variable a is 4 now and b is 3.14  have different value
