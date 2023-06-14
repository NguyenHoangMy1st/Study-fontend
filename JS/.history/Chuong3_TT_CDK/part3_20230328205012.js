
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