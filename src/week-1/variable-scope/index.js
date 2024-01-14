// Global scope

var x = 30;
var y = 40;
var z;
const add = () => {
  z = x + y;
  return z;
};
add();
console.log(z);

// Block scope
if (true) {
  var v1 = 10;
  let v2 = 20;
  console.log(v1);
  console.log(v2);
}

console.log(v1);
// console.log(v2); it show an error because let variables are block-scope based,which means that v2 will not be accessible outside the if block.

// Function scope

function fun() {
  var temp = "temp is defined in function scope";
  var temp1 = "temp1 is not defined in function scope";

  console.log(temp);
}

fun();
// console.log(temp1); show error because temp1 is declare in inside the function but we try to access outside the function
