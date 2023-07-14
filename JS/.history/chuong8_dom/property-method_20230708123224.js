// 1. selector.getAttribute("attribute")
// attribute -> thuộc tính: href, id, class, src, style
const link = document.querySelector(".link");
// if(link){
//     console.log(link);

// }else{ return null;}
console.log(link.getAttribute("href"));
console.log("----------------------------------------")
const li = document.querySelectorAll(".item");
console.log(li);