// forEach
// Does not return new Array

const people = [
  { name: "Emma", age: 27, position: "The Leader" },
  { name: "Daniel", age: 33, position: "Hero" },
  { name: "Ron", age: 32, position: "Hero Friend" },
];

function showPerson(person) {
  console.log(person.name.toUpperCase());
}

// people.forEach(showPerson);

people.forEach(function (item) {
  console.log(item.name);
});
