// map
// does return new array
// does not change the size of original array
// use values from original array when making new one

const people = [
  { name: "Emma", age: 27, position: "The Leader" },
  { name: "Daniel", age: 33, position: "Hero" },
  { name: "Ron", age: 32, position: "Hero Friend" },
];

const ages = people.map(function (person) {
  return person.age;
});

const newPeopleArray = people.map(function (person) {
  return {
    firstName: person.name,
    oldAge: person.age,
  };
});

const renderNewArray = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = renderNewArray.join("");

console.log(renderNewArray);
