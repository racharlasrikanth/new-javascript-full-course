// childNodes - whitespace
// children - no whitespace
// nextSibling - whitespace
// nextElementSibling - no whitespace
// previousSibling - whitespace
// previousElementSibling - no whitespace
// parentElement - no whitespace
// firstChild - whitespace
// firstElementChild - no whitespace
// lastChild - whitespace
// lastElementChild - no whitespace

const list = document.querySelector("ul");
console.log(list.firstElementChild);

const lastItem = list.lastElementChild;
console.log(lastItem);

// const listItem = document.querySelector("ul li:nth-child(4)");

// console.log(listItem);

// console.log(listItem.parentElement.parentElement.parentElement.parentElement);

// console.log(listItem.nextSibling.nextSibling);

// const list = document.querySelector("ul");
// console.log(list);

// console.log(list.childNodes);
// console.log(list.children);

// const body = document.querySelector("body");
// console.log(body.children);
