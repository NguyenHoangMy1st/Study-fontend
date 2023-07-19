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

// 3. childNode: trả về 1 mảng hết các node bên trong bao gồm textNode
//    children:  trả về các node không bao gồm textNode
console.log(span.childNodes);            // text strong text
console.log(span.children(1));           // <strong>

// 4. firstChild: lấy phần tử đầu tiên
//    firstElementChild: lấy element
console.log(span.firstChild);            // text
console.log(span.firstElementChild);     // <strong>

// 5. lastChild: lấy phần tử đầu tiên
//    lastElementChild: lấy element
console.log(span.lastChild);            // text
console.log(span.lastElementChild);     // <strong>

// 6. nextSibling vs previousSibling
console.log(span.nextSibling);            // text
