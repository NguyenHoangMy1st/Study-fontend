const a = true;
const b = "";
const c = "Hi";

const d = a && b && c; // ''
// console.log(d);

let check = 10;
const handle = () => {
  return [1, 2, 3].map((item) => item * 2);
};
let value = [];
// if (check > 9) {
//   value = handle();
// }
value = check > 9 && handle();
console.log(value);

let fname = "alex";
fname === "alex" ? console.log("true") : console.log(false); // true

let a1 = `3`;

let c1 = `string text ${a} string text`;
console.log(c1);
