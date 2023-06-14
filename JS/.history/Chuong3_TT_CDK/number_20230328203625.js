//NUMBER
console.log(5 + 7);             //12
console.log(typeof 10);         //number
const number1 = "5";            //
const number2 = "4.8";          //string
console.log(parseInt(number1)); //5     string chuyển thành số nguyên
console.log(parseFloat(number2));//4.8  string chuyển thành số thực
const number3 = -10;
//Math.abs: trị tuyệt đối
console.log(Math.abs(number3)); //10    
//Math.floor(value) -> làm tròn xuống
console.log(Math.floor(4.3));   //4
//Math.ceil(value) -> làm tròn lên
console.log(Math.ceil(4.3));   //5
//Math.round(value) -> làm tròn gần nhất    4,4->4; 4,6->5
console.log(Math.round(4.3));   //4

console.log(1 / 3);
//toFixed(number): lấy number số (trả về string)  vd: 0.333333333 -> 0.33
console.log((1 / 3).toFixed(2));    //string 
console.log(parseFloat((1 / 3).toFixed(2))); //(nếu muốn float sài parseFloat)

console.log(`Max: ${Math.max(1, 3, -5, 10)}`); //in ra giá trị max

console.log(Math.pow(3, 2)); //9

//isNaN vs Number.isNaN
//NaN -> Not a Number           //NaN -> Not a Number
//NaN -> Not a Number           //NaN -> Not a Number
//NaN -> Not a Number           //NaN -> Not a Number
console.log(isNaN("This is a string"));     //true
console.log(isNaN("123456"));               //in ra 123456 -> false

console.log(Number.isNaN("This is a string"));     //false
console.log(Number.isNaN("123456"));               //false
console.log(Number.isNaN(NaN));                    //true
console.log(Number.isNaN(0 / 0));                  //true



