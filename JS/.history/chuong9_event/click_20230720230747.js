// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handlerClick(){
    console.log("click me");
}
// Sai
// button.addEventListener("click", handlerClick());
// Đúng
button.addEventListener("click", handlerClick);
button.addEventListener("click", function(){

});
span.addEventListener("")
// bubbling: nổi bọt
