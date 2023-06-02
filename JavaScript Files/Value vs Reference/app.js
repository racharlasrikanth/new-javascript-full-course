// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

let number1 = 10;
let number2 = number1;
number2 = 20;
console.log(`The first number is ${number1}`);
console.log(`The second number is ${number2}`);

let person1 = { name: "emma" };
let person2 = { ...person1 };
person2.name = "Harry";
console.log(`The first name is ${person1.name}`);
console.log(`The second name is ${person2.name}`);
