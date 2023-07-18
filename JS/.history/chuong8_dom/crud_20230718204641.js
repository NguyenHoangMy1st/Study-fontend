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
div.textContent = "lorem";
div.innerHTML = `<div class = "content"><h3></h3></div>`;
div.setAttribute("data-name", "evondev");

// bài tạo tạo ra html như đã minh họa ở file HTML
const card = document.createElement("div");
card.classList.add("c")