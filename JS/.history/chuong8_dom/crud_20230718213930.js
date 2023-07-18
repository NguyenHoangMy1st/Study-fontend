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
card.classList.add("card");
const cardImage = document.createElement("img");
// cardImage.setAttribute("src", "https://source.unsplash.com/random");
cardImage.setAttribute("class", "card-image");
card.appendChild(cardImage);
body.appendChild(card);

// 3. document.createTextNode
const text = document.createTextNode("Hello my name is Kin");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);   //h1 trong body

// 4. element.cloneNode() -> sao chép element, nếu truyền vào true thì sao chép toàn bộ ndung element, truyền false thì chỉ lấy tag
const h1Clone = h1.cloneNode();
body.appendChild(h1Clone);

// 5. element.hasChildNodes -> kiểm tra có phần tử con hay không: có -> true, không -> false
console.log(h1.hasChildNodes());

// 6. selector.parentNode