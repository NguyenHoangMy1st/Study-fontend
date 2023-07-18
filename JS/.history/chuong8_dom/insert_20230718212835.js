// 1. insertAdjacentText
const h3 = document.querySelector("h3");
// h3.insertAdjacentText("position", "text");  
// position: beforebegin, afterbegin, beforeend, afterend
h3.insertAdjacentText("beforebegin", "begin");

// 2.insertAdjacentElement
const strong = document.createElement("strong");
strong.classList.add("bold");
