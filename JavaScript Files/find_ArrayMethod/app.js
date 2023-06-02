// find
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

const people = [
  { name: "Emma Watson", age: 27, position: "The Leader", id: 1 },
  { name: "Daniel", age: 28, position: "Hero", id: 2 },
  { name: "Ron", age: 32, position: "Hero Friend", id: 3 },
  { name: "Ron", age: 32, position: "Hero Friend", id: 4 },
];

// const newNames = ["Emma", "Ron", "Harrry", "Daniel"];
// const findNewNames = newNames.find(function (firstName) {
//   return firstName === "Harrry";
// });
// console.log(findNewNames);

const findingUnique = people.find(function (person) {
  return person.id === 10;
});
console.log(findingUnique ? findingUnique.name : findingUnique);

const findingUnique2 = people.filter(function (person) {
  return person.id === 1;
});
console.log(findingUnique2[0].name);
