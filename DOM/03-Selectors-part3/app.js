// getelementByid()
// getElementByTagName()
// getElementByClassName()

// querySelector()
// querySelectorAll()

const listItem = document.querySelector("ul li:nth-child(3)");
console.log(listItem);

const allParas = document.querySelectorAll(
  ".text-para1,.text-para2,.text-para3"
);
console.log(allParas);
