// cách khai báo object
// object literal hay được sử dụng
const objectLiteral = {};
// object constructor
const objectConstructor = new Object();

const student = {
  name: "my",
  age: 21,
  male: true,
  "last-name": "nguyen",
  hi: function () {
    console.log("Hello");
  },
};

// 2 cách truy xuất giá trị của object
// 2.1 Dot notation
console.log(student.name);
// 2.2 Bracket notation dùng cho key đặc biệt
console.log(student["age"]);
console.log(student["last-name"]);

// Thay đổi giá trị của object
student.age = 20;
student.name = "kin";
student.class = "20TCLC"; // thêm giá trị của object
student["class-name"] = "ALL";
console.log(student);
console.log("-------------------------------------------------------");
// Xóa giá trị của object
delete student["class-name"];
console.log(student);
console.log("-------------------------------------------------------");
// for in
for (let key in student) {
  if (key === "name") {
    console.log("hello name");
  }
  const value = student[key];
  console.log(`${key}:${value}`);
}
console.log("-------------------------------------------------------");
// Object.keys(object) -> trả về 1 mảng chứa tất cả các keys của object
const keys = Object.keys(student);
console.log(keys); // Show danh sách các keys để làm gì đó
console.log(keys.length);
console.log("-------------------------------------------------------");
// Object.values(object) -> trả về 1 mảng chứa tất cả các giá trị của object
const values = Object.values(student);
console.log(values); // Show danh sách các giá trị để làm gì đó
console.log("-------------------------------------------------------");
// Object.entries(object) -> trả về 1 mảng lớn gồm có keys và values là 1 mảng nhỏ
const entries = Object.entries(student);
console.log(entries);
console.log("-------------------------------------------------------");
// Object.assign(object) -> gộp object
const a = {
    firstName: "kin",
};
const b = {
    lastName: "nguyen",
};
const c = Object.assign(a, b);
console.log(c);
const d = {...a, ...b};
console.log(d);
console.log("-------------------------------------------------------");
// Object.freeze(object) -> đóng băng object ngăn chặn chỉnh sửa keys và values
const car = {
    brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";      // sửa lại brand thành Audi
console.log(newCar);
console.log("-------------------------------------------------------");
// Object.seal(object) -> cho phép chỉnh sửa key value nhưng không được thêm key value mới
const user = {
    userName: "Thuy Vy",
    school: {
        name: "Bach Khoa",
        room: {
            name: "IT",
        }
    }
};
// const newUser = Object.seal(user);
// newUser.userName = "Thú y Vy";
// newUser.lastName = "nguyen";
// console.log(newUser);
// console.log("-------------------------------------------------------");

// spread operator to copy Object [...array] { ...object}
const newUser1 = {...user};
newUser1.userName = "vy con ba Sen";
// console.log(user);
console.log("------------------------Object.assign(object)----------------------");
// Object.assign(object)
console.log(newUser1);
const newUser2 = Object.assign({}, user);
// newUser2.school.name = "Designer";       // cách này sai không nên sử dụng đối với key nhiều cấp, chỉ sử dụng khi key 1 cấp
console.log(newUser2);
console.log("-----------------------JSON.parse(JSON.stringify(object)------------");
// copy object đúng với key nhiều cấp
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "Designer";
console.log(newUser3);
console.log("-------------------------------------------------------");
// this keyword
// this nó sẽ đề cập đến object gần nhất
const student2 = {
    name: "My",
    age: 21,
    male: true,
    "last-name": "nguyen",
    hi: function () {
        console.log(`My name is ${this.name} and i am ${this.age} year old `);
    },
    fullname: {
      name: "Nguyen Hoang My",
    },
};
student2.hi();
console.log("-------------------------------------------------------");
// optional chaining
console.log(student2.fullname); //undefined nếu ko có fullname, còn có thì show
// Kiểm tra trong fullname có name hay không
// console.log(student2.fullname.name);  //nếu chưa có fullname thì undefined.name -> Cannot read properties of undefined
console.log("------------------------Cách 1-------------------------------");
if(student2.fullname){
  if(student2.fullname.name){
    console.log(student2.fullname.name);
  }
}
// student2.fullname?.name?
console.log("------------------------Cách 2-------------------------------");
console.log(student2.fullname?.name);
console.log("-------------------------------------------------------");
// destructuring object
const{name, age, male, ...rest} = student2;       //lấy các key còn lại trừ key trong ngoặc 
console.log(rest);
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
console.log("-------------------------------------------------------");
// function whatYourInfo(name, age, school){
//   console.log(name, age, school);
// }
// whatYourInfo(20, "Bach Khoa", "kin");     //nếu không nhớ thứ tự parameter của hàm function thì -> cách này sai 
function whatYourInfo(obj){
  console.log(obj.name, obj.age, obj.school); // Không cần quan tâm thứ tự parameter
}
const newObj  = {
  name: "Kin",
  age: 21,
  school: "Bach Khoa",
};
whatYourInfo(newObj);         
// object destructuring parameter
function whatYourInfo2({name, age, school}){
  console.log(name, age, school);
}
whatYourInfo2({
  school: "Kinh te",
  age: "19",
  name: "Zy",
});

