// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handlerClick(){
    console.log("click button");
}
// Sai
// button.addEventListener("click", handlerClick());
// Đúng
// button.addEventListener("click", function(){

// });
button.addEventListener("click", handlerClick, {
    capture
});
span.addEventListener("click", function(event){
    // event.stopPropagation();
    event.stopImmediatePropagation();
    console.log("click span");
});
span.addEventListener("click", function(){
    console.log("click span2");
});
document.body.addEventListener("click", function(event){
    console.log("click body");
});
// bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài (từ span -> button -> body vì cả 3 đều có sự kiện "click")
// muốn chặn bubbling thì sài event.stopPropagation(); có tham số là event của function
