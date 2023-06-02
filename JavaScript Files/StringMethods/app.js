// String Properties and Methods
// Wrapper String Object, Don't Memorize Methods

let text = "Srikanth Racharla";

let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(1));
console.log(text.charAt(text.length - 2));
console.log(text.indexOf("S"));
// console.log(text.startsWith(" Srikanth"));
console.log(text);
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith("srikanth"));
console.log(text.toLowerCase().includes("rac"));
console.log(text.slice(0, 8));
console.log(text.slice(-3));

// const person = {
//   name: "Srikanth",
//   greeting: function () {
//     console.log("Hey how are you??");
//   },
// };
// console.log(person);
// console.log(person.name);
// console.log(person.greeting());
