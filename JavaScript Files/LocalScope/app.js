// Local Scope
// Cannot be access from outside code blocks
// if   -    NOT VAR

let firstName = "Emma";

function calculate() {
  const firstName = "srikanth";
  console.log(firstName);

  //   const firstName = "Harry";
  //   let lastName = "Watson";
  //   boom = "I'm global vairable";
}

calculate();

if (true) {
}

console.log(`Hey this is ${firstName} and I'm awesome`);
