// className
// classList
// add()
// remove()
// contains()
// toggle()

const list = document.querySelector("ul");
console.log(list);

if (list.classList.contains("normal")) {
  list.classList.add("orange");
  console.log("yes normal class is present");
} else {
  list.classList.add("blue");
  console.log("normal class not avaiable");
}

list.classList.toggle("navbar");

// console.log(list.className);
// list.className = "navbar";

// console.log(list.classList);
// list.classList.add("navbar");
// list.classList.add("new-list");

// list.classList.remove("normal");
// list.classList.remove("navbar");
