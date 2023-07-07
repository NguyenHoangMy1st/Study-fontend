

// Vòng lặp
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//   // console.log(`The index is ${i}`);
//   if (numbers[i] === 8) {
//     // break;           // đến giá trị này thì dừng
//     // continue;        // bỏ qua giá trị này (vẫn chạy tiếp tục)
//   }
//   console.log(`The value is ${numbers[i]}`);
// }


// nested loop [[1,2,3,4,5], [1,2,3,4,5]]

// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(`The value is ${numbers[i]}`);
//   for (let j = numbers.length -1 ;  j >= 0; j --){
//     // code
//   }
// }



// 1.Sao chép một mảng sử dụng vòng lặp for
let copyArr = [];
//pust(value)
for(let i = 0; i < numbers.length; i++){
  copyArr.push(numbers[i]);
}
console.log(copyArr);

// 2.Đảo ngược từ " i love " -> "evol i"
let str = "i love";
let result = "";
for(let i = str.length - 1; i >= 0 ; i--){
  console.log(str[i]);
  result = result + str[i];
}
console.log(result);


// // while
// let number = 1;
// while(number < 10){
//   console.log("Number is" + number);
//   number++;
// }
// console.log("-------------------------");
// // do while
// let number2 = 1;
// do{
//   console.log("Number is" + number2)
//   number2++;
// }while(number2<10);

// for of