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
// button.addEventListener("click", handlerClick, {
//     capture: true,
// });
// span.addEventListener("click", function(event){
    //     // event.stopPropagation();
    //     event.stopImmediatePropagation();
//     console.log("click span");
// }, {
    //     capture: true,
    // });
    // span.addEventListener("click", function(){
        //     console.log("click span2");
        // });
        // document.body.addEventListener("click", function(event){
            //     console.log("click body");
            // }, {
//     capture: true,
// });
// bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài (từ span -> button -> body vì cả 3 đều có sự kiện "click")
// muốn chặn bubbling thì sài event.stopPropagation(); có tham số là event của function

// target vs currentTarget
button.addEventListener("click", function(event){
    // event.target: nó sẽ chọn chính xác element mà mình click
    console.log(event.target);              
    // event.currentTarget: nó sẽ chọn phần tử mà mình click
    console.log(event.currentTarget);
});
// event.preventDefault();
const link = document.querySelector(".link");
link.addEventListener("click", function(event){
    console.log("click link");
});

