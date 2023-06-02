// Arrays and for loop

const firstNames = ["Emma", "Daniel"];
let lastName = "Watson";

const newArray = [];

// for loop
// for(initialization, condition, incerement/decrement)

for (let i = 0; i < firstNames.length; i++) {
  //   console.log(i);
  //   console.log(firstNames[i]);

  //   let fullName = `${firstNames[i]} ${lastName}`;
  newArray.push(`${firstNames[i]} ${lastName}`);
}

console.log(firstNames);
console.log(newArray);
