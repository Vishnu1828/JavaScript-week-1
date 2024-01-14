## Object Data Types:

Reference types are another matter, however. Objects, for example, can be of any length -- they do not have a fixed size. The same is true of arrays: an array can have any number of elements. Similarly, a function can contain any amount of JavaScript code. Since these **_types do not have a fixed size_**, their values **_cannot be stored directly in the eight bytes of memory_** associated with each variable. Instead, the variable **_stores a reference to the value_**. Typically, this **_reference is some form of pointer or memory address_**. It is not the data value itself, but it tells the variable where to look to find the value.

### Object:

A collection of key-value pairs.

```
Example: let person = { name: "John", age: 30 };
```

### Array:

An ordered list of values.

```
Example: let myArray = [1, 2, 3];
```

### Function:

A reusable block of code.

```
Example: function greet(name) { console.log("Hello, " + name + "!"); }
```

### Date:

Represents a specific point in time.

```
Example: let today = new Date()
```
