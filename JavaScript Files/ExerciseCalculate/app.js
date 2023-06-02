// Functions, return, if, arrays, for loop, Objects

const gas = [20, 40, 50, 100, 400];
const food = [30, 50, 30];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; // total =  tatal + arr[i]
  }
  if (total > 100) {
    console.log(`Heyy You are spending too much money`);
    return total;
  }
  console.log(`Heyy man you are good, total is lessthan 100`);
  return total;
}

let gasTotal = calculateTotal(gas);
let foodTotal = calculateTotal(food);
let randomTotal = calculateTotal([1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 10]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});

// console.log(gasTotal);
// console.log(foodTotal);
// console.log(randomTotal);
