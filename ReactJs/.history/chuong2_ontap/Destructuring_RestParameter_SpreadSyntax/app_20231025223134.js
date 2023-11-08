/**
 * Destructuring
 */

// Destructuring với object
const user = {
  name: "Kin",
  age: 21,
  sex: "male",
};

// const name = user.name;
// const age = user.age;
// const sex = user.sex;

const { age, name, sex } = user;
console.log(name, age, sex);
