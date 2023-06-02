// Date

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturtday",
];

const date = new Date("01/27/2021");
// console.log(date);

const month = date.getMonth();
console.log(months[month]);

const weekDay = date.getDay();
console.log(days[weekDay]);

console.log(date.getFullYear());

console.log(date.getDate());

const sentence = `${days[weekDay]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

console.log(sentence);

console.log(date.getTime());

// DOM ==> Document Object Model
document.body.innerHTML = sentence;
