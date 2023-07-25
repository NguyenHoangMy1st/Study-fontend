// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
// Sai
// button.addEventListener("click", handlerClick());
// Đúng
// button.addEventListener("click", function(){
    
    // });
    function handlerClick(){
        console.log("click button");
    }
button.addEventListener("click", handlerClick);
span.addEventListener("click", function(){
    console.log("click span");
})
// bubbling: nổi bọt
