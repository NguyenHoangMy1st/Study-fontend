// addEventListener
const button = document.querySelector(".button");
function handlerClick(){
    console.log("click me");
}
// Sai
// button.addEventListener("click", handlerClick());
// Đúng
button.addEventListener("click", handlerClick)