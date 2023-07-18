// 1. parentNode (phần tử cha của nó), parentElement 
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement);