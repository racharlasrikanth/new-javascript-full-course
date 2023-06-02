// Array Properties and Methods

let fruitNames = ["apple", "banana", "cherries", "orange", "blueberries"];

// length
console.log(fruitNames.length);
console.log(fruitNames[fruitNames.length - 1]);

// concat
const firstNames = ["Emma", "Ron", "Daniel"];
const allNames = fruitNames.concat(firstNames);
console.log(allNames);
// reverse
console.log(allNames.reverse());

// push
allNames.push("Grapes");
allNames.push("blackberries");
console.log(allNames);
// pop
allNames.pop();
allNames.pop();
console.log(allNames);

// unshift
allNames.unshift("BlackBerries");
allNames.unshift("Grapes");
console.log(allNames);
// shift
allNames.shift();
allNames.shift();
console.log(allNames);
