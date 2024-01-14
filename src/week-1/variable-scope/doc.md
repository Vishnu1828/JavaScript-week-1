# Scope:
* Scope determines the accessibility of variables, objects, and functions from different parts of the code

## Types of Scops

* Global scope
* Block scope
* Function scope

### Global Scope:

* The Javascript global scope is the context where everything in a Javascript program executes by default.
* This scope includes all variables, objects, and references that are not contained within a customized scope defined by a programmer. Global scope is the entire Javascript execution environment.
```
var x=30;
var y=40;
var z;
const add=()=>{
    z=x+y
return z;
}
add()
console.log(z)
```
* In the above example code we can access the variable x and y in inside the function because it is in global scope.

### Block Scope:

* The block scope of a variable means that the variable is accessible within the block that is between the curly braces.
```

if(true)
{
  var v1 =10;
  let v2=20;
  console.log(v1);
  console.log(v2); 
}

console.log(v1);
console.log(v2);
```
* we defined some variables in the if block and printed them to the console.
* When you run the above code, you can see that an error occurs while printing the variable v2. As var variables are function-scope based, we can access v1; however, let variables are block-scope based, which means that v2 will not be accessible outside the if block.

### Function Scope:

* This scope means that the variables are only accessible in the function in which they are declared.

```
function fun()
{
	var temp ="temp is defined in function scope";
	var temp1 ="temp1 is not defined in function scope";

	console.log(temp); 
}

fun();
console.log(temp1);
```
* In the above example code the temp will give answer , but in temp1 will throw an error because temp1 is declared in function so it can't access outside the function


## Reference Link

[Block scope](https://www.educative.io/answers/what-is-function-and-block-scope-in-javascript)

[Function scope](https://www.educative.io/answers/what-is-function-and-block-scope-in-javascript)
