
# Variable:
A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.

### Variable Declaration:

To use variables in JavaScript, we first need to create it i.e. declare a variable. To declare variables, we use one of the ***var***, ***let***, or ***const*** keywords.

```
var a;
let b;
```
### Variable Initialization:
Once you've declared a variable, you can initialize it with a value. You do this by typing the variable name, followed by an equals sign (=), followed by the value you want to give it.


```
var a=10;
let name="Itachi";
const Anime=["Naruto","BlackClover","Bleach","OnePiece"]
```

## What is Var, let and Const:

### Var:
* The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.
* If we use Var statement, we can both re-assign and redefined that variable.

```
var x = 100;
var y = x + 102;
y;

output:
202
```


### Let:
* The let statement declares re-assignable but can't redefined, block-scoped local variables, optionally initializing each to a value.


```
let X=10;
let X=2;
x;

output:
10
```

### Const:
* The const declaration declares block-scoped local variables.
* The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed.

```
const PI = 3.1415;
output:
3.1415
```




