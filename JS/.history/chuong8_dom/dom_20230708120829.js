// 1. DOM là Document Object Model
// DOM attribute
// DOM node

// 2. Selecting nodes
// 2.1 document.querySelector(selector) -> trả về 1 node nếu tồn tại selector đó, ngược lại trả về null
// selector: header, p, body, #heading
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".container .heading");  //null
console.log(singleNode3);
console.log("--------------------------------------------------");

// 2.2 document.querySelectorAll("selector") -> trả về một NodeList chứa danh sách các node, ngược lại trả về empty
// nó có thể loop, nó giống array nhưng không sử dụng được các phương thức như push , pop, shift
const multiNodes = document.querySelectorAll(".item");
console.log(multiNodes);
console.log("--------------------------------------------------");

console.log("--------------------------------------------------");
console.log("--------------------------------------------------");
console.log("--------------------------------------------------");





console.log("--------------------------------------------------");