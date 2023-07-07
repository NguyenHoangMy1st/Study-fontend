// 1. Cho 1 mảng gồm nhiều giá trị [1, 100, false, null, "hoangmy", "", undefined, "javascript",[1, 2, 3], NaN]
// Viết chương trình loại bỏ giá trị falsy ra khỏi mảng, chỉ giữ lại truthy.
// Falsy là 0 null undefined false "" NaN
// 2. Cho 1 mảng phức tạp [[1, 2, 3], [false, null]], [1, 5, 6, ["javascript"]], [888, 666, [90]]. 
// Kết quả mong muốn là [1, 2, 3, false, null, 1, 5, 6, "javascript", 888, 666, 90]

// 3. Đảo ngược số nguyên 1234 -> 4321, -567 -> -765

// 4. Truyền vào str FizzBuzz. tạo for với 1 số nguyên nếu chia hết cho 2 in ra fizz, chia hết cho 3 in ra buzz, chia hết cho 2 và 3 in ra FizzBuzz
// bài 1
const arr = [1, 100, false, null, "hoangmy", "", undefined, "javascript",[1, 2, 3], NaN];

const fillterFalsy = arr.filter(item => Boolean(item));
console.log(fillterFalsy);
console.log("-----------------------------------------------------------");

// bài 2
const complexArr = [[1, 2, 3, [false, null]], [1, 5, 6, ["javascript"]], [888, 666, [90]]];
// flat(number)
const result = complexArr.flat(2);          //nên để number là số lớn 
console.log(result);
console.log("-----------------------------------------------------------");

// bài 3
// Math.sign(123)  ->  1
// Math.sign(-123) -> -1
function reverseNumber(number){
    // convert to string
    // split("") -> [value]
    // reverse()
    // join("")
    const value = parseInt(number.toString().split("").reverse().join(""))*Math.sign(number);
    console.log(value);
}
reverseNumber(1234);
reverseNumber(-1234);


// bai 4 
function fizzBuzz(number){
    for(let i = i; i <= number; i++){
        if(i % 2 === 0 && i % 3 === 0){
            console.log("FizzBuzz");
           }
        else if(i % 2 === 0){
            console.log("Fizz");
        } 
        else if(i % 3 === 0){
            console.log("Buzz");
       } 
    }
}

// bài 5 đếm số lượng kí tự 'e' 'u' 'o' 'a' 'i' có trong chuỗi
function countVowels(str)
{
    let count = 0;
    const characters = "euoai";
    for(let c of str.toLowerCase()){
        if(characters.includes(c)) count++;             // nếu character chứa includes[c trong chuỗi] thì tăng count lên 1
    }
    return count;
}
console.log(countVowels("nguyen hoang my"));

// bài 6 xử lí 1 mảng lớn thành mảng con dựa vào 1 số nguyên
// ví dụ [[1, 2, 3, 4, 5]], 2] -> [[1, 2], [3, 4], [5]]
function splitArr(arr, number){
    let result = [];
    // slice(start, end)
    let index = 0;
    while(index < arr.length){
        result.push(arr.slice(index, index + number));
        index = index + number;
    }
    console.log(result);
    return result;
}
splitArr([1, 2, 3, 4, 5], 2)