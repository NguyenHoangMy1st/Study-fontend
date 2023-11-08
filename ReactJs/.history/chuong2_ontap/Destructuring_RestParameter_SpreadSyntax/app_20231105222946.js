/**
 * Destructuring
 */

// Destructuring với object
// const user = {
//   name: "Kin",
//   age: 21,
//   sex: "male",
// };

// const name = user.name;
// const age = user.age;
// const sex = user.sex;

// const { age: userAge, name, sex } = user;
// console.log(name, userAge, sex);

// Destructuring với array
// const list = [
//   1,
//   function (a, b) {
//     return a + b;
//   },
// ];
// const [value, sum] = list;
// console.log(sum(2, 3));

/*
 * Spread Syntax
 */

const user = {
  name: "Kin",
  age: 21,
  ability: ["coding"],
};
// const cloneUser = user;
// console.log(cloneUser === user);          // true vì cách này copy hết
// shallow copy (copy rỗng)
const cloneUser = { ...user };
// console.log(cloneUser === user);          // false vì cách này chỉ copy bên ngoài bỏ 2 dấu ngoặc tạo 1 object mới

// console.log(cloneUser.ability === user.ability);  //true
// Bởi vì chỉ lấy clone phía bên ngoài nên bên trong vẫn giống nhau

// Rest Parameter
const handle = (a, b, ...c) => {
  console.log(a); //[1]
  console.log(b); //[2]
  console.log(c); //[3,4,5,6]
};
handle(1, 2, 3, 4, 5, 6);

// Kết hợp rest parameter với destructuring
const handle1 = ({ a, b, ...c }) => {
  return c;
};
const value1 = handle1({ a: 1, b: 2, c: 3, d: 4, e: 5 });
console.log(value1); //{c: 3, d: 4, e: 5}
