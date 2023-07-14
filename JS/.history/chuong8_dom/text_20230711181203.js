// 1. textContent -> lấy ra nội dung (only text) bao gồm text trong html tag (nếu có) của selector
const spinner = document.querySelector("#spinner");
// thay đổi textContent
// spinner.textContent = "Hello new content";
console.log(spinner.textContent);

// 2. innerText -> lấy nội dung như trên, nhưng nó loại bỏ khoảng trắng, xuống dòng và không lấy được text trong html 
console.log(spinner.innerText);
// spinner.textContent = `<div class="demo">hello html</div>`;

// 3. innerHTML -> lấy ra nội dung của selector bao gồm cả HTML

console.log(spinner.innerHTML);

