// innerHtml
// innerText
// textContent


const para = document.querySelector('.para');
console.log(para);

console.log(para.textContent);
console.log(para.innerText);
console.log(para.innerHTML);

para.textContent =  "Hello srikanth";
para.innerHTML = "<h1>Hello <span>everyone</span></h1>";
para.innerText  ="welcome" 