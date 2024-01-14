//object

const person = {
  animeName: "FairyTail",
  mainCharacter: "Natsu Dragneel",
  specialPower: "fire",
};
let person1 = person; // in this the memory address is point to the person1 so if we change any value in person1 it also effect the parent object person

let person2 = JSON.parse(JSON.stringify(person)); // in this person2 have store the data in different memory address so if we change in person2 it can't change the person
console.log(person.animeName); // FairyTail
console.log(person["mainCharacter"]); //Natsu Dragneel

console.log(typeof person); // object
console.log(Object.keys(person)); //[ 'animeName', 'mainCharacter', 'specialPower' ] return key values of the given object
console.log(Object.values(person)); //[ 'FairyTail', 'Natsu Dragneel', 'fire' ] return  values of the given object
console.log(person1 === person); // true
Object.assign(person1, { age: 18 });
console.log(person1, person);
console.log(person1 === person); //true person1 and person have same memory address
console.log(person2 === person); // false person2 and person have different memory address
Object.assign(person2, { age: 23 });
console.log(person2, person, person1);
console.log(person2 === person); //false

//Array
let color = ["red", "blue", "orange", "white", "black"];

/**This because in javascript all derived data type is always a type object. Included functions and array.
 */
console.log(typeof color); // object

/**In case you need to check if it's an array you can use isArray method of Array. and the result will be the same as the previous one */
console.log(Array.isArray(color)); //true
