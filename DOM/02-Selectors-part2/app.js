// getelementByid()
// getElementByTagName()
// getElementByClassName()

// querySelector()
const textDiv = document.querySelector("#text-div");
console.log(textDiv);

const content = document.querySelector(".content");
console.log(content);

const byTag = document.querySelector("h1");
console.log(byTag);

// querySelectorAll()
const allContent = document.querySelectorAll(".content");
console.log(allContent);

const insideH5Tag = document.querySelector(".text-container h5");
console.log(insideH5Tag);

const ul = document.querySelector(".navbar");
console.log(ul);

const lis = document.querySelectorAll(".navbar li");
console.log(lis);
