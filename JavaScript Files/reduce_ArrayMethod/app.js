// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people = [
  { name: "Emma Watson", age: 27, position: "The Leader", id: 1, salary: 500 },
  { name: "Daniel", age: 28, position: "Hero", id: 2, salary: 300 },
  { name: "Ron", age: 32, position: "Hero Friend", id: 3, salary: 200 },
  { name: "Ron", age: 32, position: "Hero Friend", id: 4, salary: 200 },
];

const newArray = people.reduce(function (acc, currPerson) {
  console.log(`Total Salary : ${acc}`);
  console.log(`Current person Salary : ${currPerson.salary}`);
  acc += currPerson.salary;
  return acc;
}, 0);

console.log(newArray);
