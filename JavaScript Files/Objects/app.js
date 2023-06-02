// Arrays, Functions and Objects
// Objects - Key/value pairs, Methods
// dot notation

const person = {
  name: "Emma",
  lastName: "Watson",
  age: 27,
  education: true,
  married: false,
  friends: ["Ron", "Daniel"],
  greeting: function () {
    console.log("Heyy Emma!!!");
  },
};

console.log(person.name);
console.log(person.married);
console.log(person.friends);
person.greeting();

console.log(person["name"]);

console.log(typeof person);
console.log(typeof person["friends"]);
