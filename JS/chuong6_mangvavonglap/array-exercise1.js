// 1 . Đảo ngược 1 chuỗi. Vd : " My name is zyzy" -> zyzy is name My
// const ex1 = ["My name is zyzy"];
function reverseString(str) {
  if (!str) return null;
  else {
    // split(""); -> chuyển chuỗi thành mảng
    const arr = str.split(" ").reverse();
    // join nối mảng thành chuỗi
    const joinStr = arr.join(" ");
    return joinStr;
    //return str.split(" ").reverse().join(" ");
  }
}
console.log(reverseString("My name is zyzy"));
console.log("--------------------------------------");

// 2 . Đảo ngược một chuỗi bao gồm các kí tự . Ví du "i love" -> "evol i"
function reverseWord(str) {
  if (!str) return null;
  const newStr = str.split("").reverse();
  const joinStr = newStr.join("");
  return console.log(joinStr);
}
reverseWord("i love you");
console.log("--------------------------------------");

// 3. In hoa chữ cái đầu trong chũ ví dụ : " my name is evondev" -> "My Name Is Evondev"
function capitalizeWord(word = "") {
  if (word.length === 0) return null;
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
function capitalizeStr(str) {
  if (!str) return null;
  // str.split(" ").map(item => capitalizeWord(item)).join(" ")
  const result = str
    .split(" ")
    // .map(capitalizeWord)
    .map((item) => capitalizeWord(item))
    .join(" ");
  console.log(result);
}
capitalizeStr("I love you nguyen hoang my");
