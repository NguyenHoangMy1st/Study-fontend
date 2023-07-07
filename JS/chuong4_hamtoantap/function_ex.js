
///////***************BÀI TẬP FUNCTION************
/////// 1. Viết hàm so sánh hai số a , b tìm ra số lớn hơn
function compare(a = 0, b = 0) {
    // if (a > b) {
    //   console.log(`${a} lớn hơn  ${b}`);
    // } else {
    //   console.log(`${b} lớn hơn  ${a}`);
    // }
    if (typeof a != "number" || typeof b != "number")       //check kiểu của a hoặc b khác number thì trả về 0
    {
      return 0;
    }
    return Math.max(a, b);
  }
  console.log(compare(10, 100));


  //////////2. In  hoa chữ cái đầu trong chữ ví dụ javascript -> Javascript, HOCKY -> Hocky
  //  capitalize
  function capitalize(word = "") {
    if (word.length == 0) return null;
    // convert to lower case first
    let newWord = word.toLowerCase().charAt(0).toUpperCase();           //  J
    // chartAt(index) vị trí in hoa
    // hello -> slice(0,3); -> hel
    // hello -> slice(1);   -> ello
    // slice(startindex, endindex - 1)
    // console.log(newWord);    
    let otherWord = word.toLowerCase().slice(1);                        //  avascript
    // console.log(otherWord);
    console.log(`${newWord}${otherWord}`);
  }
  capitalize("javascript");


  //////// 3. Viết hàm có sử dụng callback (function là parameter của function khác) in ra 
  //kết quả của hàm compare đã viết ở trên
  function useCallBack(a, b, callback) 
  {
    let max = compare(a, b);        //  lấy ra số lớn nhất từ hàm compare đã viết ở bài 1
    callback(max);                  //  callback là một funcion có parameter là max
  }
  function printlMax(number) {
    console.log(number);
  }
  console.log(useCallBack(2, 8, printlMax));


  // Arrow function : anonymous function không có tên và không bị hosting
  // ECMAScript
  // Normal function : anonymous function
  const square = function (x) {
    return x * x;
  };
  square(5); //25

  // Arrow function cách 1
  const square1 = () => {
    // handle code and return
    return 1000;
  };

  // cách 2: rút gọn khi return
  const square2 = () => 1000;
