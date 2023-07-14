// 1. selector.getAttribute("attribute") -> lấy giá trị của attribute selector
// attribute -> thuộc tính: href, id, class, src, style
const link = document.querySelector(".link");
// if(link){
//     console.log(link);

// }else{ return null;}
console.log(link.getAttribute("href"));
console.log("----------------------------------------");

const li = document.querySelectorAll(".item");
// li.getAttribute("class");   // Sai
// console.log(li);
li.forEach(item => {
    console.log(item.getAttribute("class"));
})
console.log("----------------------------------------");

// 2. selector.setAttribute("attribute", value) -> set giá trị cho attribute nào đó của selector
link.s

