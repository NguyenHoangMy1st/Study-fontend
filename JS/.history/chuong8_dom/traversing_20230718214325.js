// 1. parentNode (phần tử cha của node), parentElement 
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement);

// 2. nextElementSibling vs previousElementSibling
const nextSpan = span.nextElementSibling;
console.log()