// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
// Sai
// button.addEventListener("click", handlerClick());
// Đúng
// button.addEventListener("click", function(){
    
    // });
    button.addEventListener("click", handlerClick);
    function handlerClick(){
        console.log("click button");
    }
span.addEventListener("click", function(){
    console.log("click span");
})
// bubbling: nổi bọt
