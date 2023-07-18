// 1. parentNode (phần tử cha của node), parentElement 
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement);

// 2. nextElementSibling: tìm tới phần tử kế tiếp
//    previousElementSibling: tìm tới phần tử đứng sau nó
const nextSpan = span.nextElementSibling;
console.log(nextSpan);      // span2
const previousLink = span.previousElementSibling;
console.log(previousLink);  // thẻ a

// 3. childNode: trả về hết các node bên trong bao gồm textNode
//    children:  trả về các node không bao gồm textNode
console.log(span.childNodes);   
console.log(span.children);

// 4. firstChild: lấy phần tử đầu tiên
//    firstElementChild:
console.log(span.firstChild);

