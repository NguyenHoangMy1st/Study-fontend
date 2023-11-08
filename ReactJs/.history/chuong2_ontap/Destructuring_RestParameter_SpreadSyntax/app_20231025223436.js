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

const { age: userAge, name, sex } = user;
console.log(name, userAge, sex);

// Destructuring với array
const list = [
  1,
  function (a, b) {
    return a + b;
  },
];
const [value, sum] = list;
console.log(sum(2, 3));

/*
 * Spread Syntax
 */

