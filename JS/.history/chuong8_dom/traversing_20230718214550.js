// 1. parentNode (phần tử cha của node), parentElement 
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement);

// 2. nextElementSibling: tìm tới phần tử kế tiếp
previousElementSibling
const nextSpan = span.nextElementSibling;
console.log(nextSpan);      // span2
const previousLink = span.previousElementSibling;
console.log(previousLink);  // thẻ a

// 3. childNode vs children