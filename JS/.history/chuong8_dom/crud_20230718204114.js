// thêm, xóa, sửa node trong JS
// 1. Tạo ra Element trong Js: document.createElement("tag")
const div = document.createElement("div");
// 2. selector.appendChild
// document.body -> thẻ body
// document.querySelector("body")
const body = document.body;
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper";