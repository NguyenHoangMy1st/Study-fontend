//String(chuỗi)
"hello world";
'js';
`frontend`;
// double quotes. singer quotes, backticks
const name1 = "Evonder"
const name2 = "FrontEnd Developer"
// console.log(name);
// console.log(typeof name); //check kieu DL
const newStr = "My name is Evonder and I am FrontEnd Developer";
const newStr2 = "My name is " + name1+ "and I am FrontEnd Developer";
// console.log(newStr2);
//$(variable)
const newStr3 = `My name is ${name1} and I am ${name2}`;
//console.log(newStr3.length);      //kiểm tra số lượng ký tự

const myStr = "FrontEnd Developer";
console.log(myStr.split(" "));      //tách từ
console.log(myStr.split(""));       //tách kí tự
console.log(myStr.split("/"));      ["FrontEnd Developer"]

console.log(myStr.toLowerCase());   //viết thường
console.log(myStr.toUpperCase());   //viết in hoa

console.log(myStr.includes("End")); //kiểm tra có kí tự trong biến hay không
console.log(myStr.includes("end"));

console.log(myStr.indexOf("D"));    //kiểm tra thứ tự của kí tự đầu tiên

console.log(myStr.replace("Developer", "Designer"))

const myStr2 = "    FrontEnd Developer     ";
//dùng nhiều phương thức vd: loại bỏ khoảng trống 2 bên, đưa về IN HOA
//sau đó repeat 2 lần
console.log(myStr2
    .trim()
    .toUpperCase()
    .repeat(2)
);


