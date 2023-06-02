// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be accesss anywhere in the program
// Gotchas : name collisions, modify by mistake

let firstName = "Emma";
firstName = "Harry";

// 100 lines of code
function calculate() {
  // some oter code
  console.log(firstName);
  firstName = "orange";

  function inner() {
    firstName = "inner function name";
  }
  inner();
}
calculate();

// if (true) {
//   console.log(firstName);
//   firstName = "Blackberry";
// }

console.log(`Hey this is ${firstName} and I'm awesome`);
