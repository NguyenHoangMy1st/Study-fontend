// 1. textContent -> lấy ra nội dung (only text) bao gồm text trong html tag (nếu có) của selector
const spinner = document.querySelector("#spinner");
// thay đổi textContent
// spinner.textContent = "Hello new content";
console.log(spinner.textContent);

// 2. innerText -> lấy nội dung như trên, nhưng tối ưu hơn: loại bỏ khoảng trắng, xuống dòng, và không lấy được  
console.log(spinner.innerText);