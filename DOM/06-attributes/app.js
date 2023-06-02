// attritutes
// getAttribute()
// setAttribute()
// dataset

const list = document.querySelector(".list");
console.log(list);

// console.log(list.attributes);

console.log(list.getAttribute("class"));
console.log(list.getAttribute("id"));

const h1 = document.querySelector("h1");
console.log(h1.getAttribute("id"));
h1.setAttribute("class", "heading");

list.setAttribute("class", "new-list");

console.log(list.dataset.name);

console.log(h1.dataset);
