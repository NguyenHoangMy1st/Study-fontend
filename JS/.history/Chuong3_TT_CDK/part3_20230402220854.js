
//chuyển đổi giá trị sang Number
"4.5" //4.5 parseFloat
"4"   //4   parseInt

//Number(value)
console.log(Number("4.5"));         //4.5
console.log(Number("abcd"));
//NaN
console.log(Number(undefined));     //NaN
console.log(Number(null));          //0
console.log(Number(false));         //0
console.log(Number(""));            //0
console.log(Number(NaN));           //0
//falsy values
console.log(Number(true));          //1

//chuyển đổi giá trị sang String
//String(value)
console.log(String(4.5));            //"4.5"
console.log(String(null));           //"null"
console.log(String(NaN));            //"NaN"

//chuyển đổi giá trị sang True or False
//Boolean(value)
console.log(`Boolean of zero: ${Boolean(0)}`);  //false
console.log(`Boolean of "": ${Boolean("")}`);   //false
console.log(`Boolean of null: ${Boolean(null)}`);   //false
console.log(`Boolean of undefined: ${Boolean(undefined)}`);   //false
console.log(`Boolean of NaN: ${Boolean(NaN)}`);   //false
console.log(`Boolean of false: ${Boolean(false)}`);   //false

//còn lại là true
console.log(`Boolean of "String": ${Boolean("String")}`);   //true

//type coercion - chuyển đổi dữ liệu
console.log(1 + 2);         //3
console.log(10 + 10);       //20
console.log(10 + "10");     //1010
//10 -> "10" + "10" => "1010"
console.log(String(10) + "10");      //1010
console.log("10" - 10);     //0     Number(10) - 10 = 0
console.log(null + ""); //"null"
console.log(null + undefined);      //NaN
console.log("" - 1);        //Number("") = 0 - 1 = -1
console.log(false - true);  //0 - 1 = -1
console.log(null + 10);     //10

//toán tử so sánh > < >= <=
console.log(5 >= 7);     //false

//toán tử logic: && || !
console.log(5 > 4 && 7 > 8);        //false

// == loose equality
console.log(10 == "10");            //true
console.log(true == "1");           //true  vì Number(true) = 1
console.log(1 == "01");             //true  vì Number("01") = 1
console.log(null == "");            //fasle vì "null" != ""
console.log(typeof 10);             //number
console.log(typeof "10");           //string
console.log(true == "true");        //false vì Number(true) = 1, còn "true" là string

// === strict equality  (khuyến khích dùng)
console.log(10 === "10");           //false
console.log(10 !== "10");           //true

//if else

//prompt, confirm, alert
// alert("Bạn đã đăng nhập thành công");
// const yourName = prompt("Vui lòng nhập tên của bạn", "")
// console.log(yourName);
// const yourName = confirm("Bạn là Nguyễn Hoàng Mỹ?");
// console.log(yourName);

//Nhập số tuổi >=18 thì được coi phim rạp
const yourAge = prompt("Vui lòng nhập tuổi của bạn", "");
console.log(typeof yourAge);    
let message = "Bạn chưa đủ tuổi";
if(Number(yourAge)>= 18)
{   
    message = "Bạn có thể được xem phim";
}
// else{
//     message = "Bạn chưa đủ tuổi";

// }
alert(message);

//




//switch case


