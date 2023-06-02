// Arrays, Functions and Objects
// expressions - another way to define a funcion
// create a variable, assign to function (not value), use variable
// diff - hoisting, use - arrow functions and libraries.

function addNumbers(num1, num2) {
  return num1 + num2;
}

const firstValue = addNumbers(5, 5);
const secondValue = addNumbers(12, 13);

// function expressions
const add = function (num1, num2) {
  return num1 + num2;
};

// const thirdValue = add(100, 200);

const result = [firstValue, secondValue, add(100, 200)];
console.log(result);

// Arrow functions will cover future videos
const Addition = (num1, num2) => num1 * num2;
