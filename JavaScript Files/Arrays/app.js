// Arrays, Functions and Objects
// Arrays - [], 0 index based

const fruit1 = "apple";
const fruit2 = "banana";
const fruit3 = "cherries";
const fruit4 = "blueberries";
const fruit5 = "blackberries";

const fruitList = [
  "apple",
  "banana",
  "cherries",
  "blueberries",
  "blackberries",
  5,
  undefined,
  null,
  true,
  false,
];

// const fruitList = [0,1,2,3,4,5,6,.....]

// console.log(fruitList);
console.log(fruitList[1]);

let bestFruit = fruitList[4];
console.log(bestFruit);

fruitList[5] = "grapes";
console.log(fruitList);

console.log(fruitList[100]);
