// getelementByid()

console.log(document.getElementById("text-div"));
console.log(document.getElementById("item"));

// getElementByTagName()

const tagItems = document.getElementsByTagName("p");
console.log(tagItems);

const newTagItems = [...tagItems];
console.log(newTagItems);

// getElementByClassName()

const classItems = document.getElementsByClassName("content");
console.log(classItems[1]);
