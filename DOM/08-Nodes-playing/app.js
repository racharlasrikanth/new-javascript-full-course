// createElement()
// createTextNode()
// appendChild() insert at last
// insertBefore()
// replaceChild()
// prepend()
// remove()
// removeChild

const list = document.querySelector(".navbar");
const listItem = "<li class='nav-item'>Dynamic NavItem</li>";

list.insertAdjacentHTML("afterend", listItem);

console.log(listItem);

// const list = document.querySelector(".navbar");
// console.log(list);

// const first = document.querySelector(".first");
// const last = document.querySelector(".last");

// const listItem = document.createElement("li");
// const text = document.createTextNode("Dynamic Service");
// listItem.appendChild(text);
// listItem.classList.add("nav-item");
// listItem.classList.add("first");

// list.removeChild(last);

// list.remove();

// list.prepend(listItem);

// list.replaceChild(listItem, first);

// list.insertBefore(listItem, first);

// list.appendChild(listItem);
