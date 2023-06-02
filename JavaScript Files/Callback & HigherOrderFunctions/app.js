function morning(firstName) {
  //   console.log(`Good Morning ${firstName}`);
  return `Good Morning ${firstName}`;
}

function afternoon(firstName) {
  return `Good Afternoon ${firstName}`;
}

function greet(firstName, cb) {
  const myName = "Srikanth";
  console.log(`${cb(firstName)}, My name is ${myName}`);
}

greet("Emma", morning);
greet("Harry", afternoon);

// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens

// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

// Callback Function - passed to a another function as an an argument and executed inside that function

// function greetMorning(firstName) {
//   const myName = "Srikanth";
//   console.log(`Good Morning ${firstName}, My name is ${myName}`);
// }

// function greetAfternoon(firstName) {
//   const myName = "Srikanth";
//   console.log(`Good Afternoon ${firstName}, My name is ${myName}`);
// }
