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
// const cloneUser = user;           // true vì cách này copy hết
// shallow copy (copy rỗng)
// const cloneUser = { ...user }; // false vì cách này chỉ copy bên ngoài bỏ 2 dấu ngoặc tạo 1 object mới

console.log(cloneUser === user);
