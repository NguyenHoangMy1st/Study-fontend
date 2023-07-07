
// slice -> tạo ra một mảng sao chép của mảng ban đầu
const animals = ["tiger", "lion", "horse", "elephant"];
// slice(): tạo ra mảng mới y hệch mảng ban đầu
const animals2 = animals.slice();
console.log(animals2); // ['tiger', 'lion', 'horse', 'elephant']

console.log("----------slice()-------------");
// slice(start) với start: vị trí index ở trong mảng đến cuối cùng  (nếu start âm thì lấy giá trị cuối cùng trở ngược lại)
// slice có thể truyền số âm vd slice (-1) => elephant
const animals3 = animals.slice(1);
console.log(animals3); // ['lion', 'horse', 'elephant']

console.log("----------splice(start, end)-------------");
// slice(start, end) : start end cũng là vị trí index của mảng có đầu và cuối (start đến end-1)
const animals4 = animals.slice(1, 3);
// ['lion', 'horse']
console.log(animals4);

console.log("----------splice()-------------");
// splice -> nó có thể xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
// Nó sẽ xoá phần tử trong mảng hoặc thay thế phần tử trong mảng
const pets = ["dog", "cat", "bird", "dragon"];
// splice(start)    // trả về giá trị start đến cuối
// const pets2 = pets.splice(2);
// ["bird", "dragon"];
// console.log(pets2);

// splice(start, deleteCount): deleteCount là số lượng phần tử muốn xoá hoặc thay thế
// const pets3 = pets.splice(0, 4);
// [] empty array: mảng rỗng


// splice(start, deleteCount, item1, item2, itemN): deleteCount là số lượng phần tử muốn xoá và item là thay thế 
const pets3 = pets.splice(0, 1, "dinasour", "pig", false, 100);
// ['dinasour', 'pig', false, 100, 'cat', 'bird', 'dragon']
console.log(pets);

console.log("----------sort()-------------");
// sort -> sắp xếp các phần tử trong mảng theo chuẩn unicode-16
const random = [1, 100, 200, "hihi", 999, 10, 20, 5, "ki"];
// [1, 10, 100, 20, 200, 5, 999, 'hihi', 'ki']
console.log(random.sort());
//  sort(function(a,b))
// function(callback)
// c1
const random2 = random.sort(function (a, b) {
  if (a > b) return 1;  // sắp xếp theo tăng dần
  if (a < b) return -1; // sắp xếp theo giảm dần
});


// c2
const random3 = random.sort((a, b) => (a > b ? 1 : -1)); // sắp xếp theo tăng dần
// const random3 = random.sort((a, b) => (a > b ? -1 : 1)); // sắp xếp theo giảm dần
console.log(random2);  // ['hihi', 'ki', 1, 5, 10, 20, 100, 200, 999]
console.log(random3);  // ['hihi', 'ki', 1, 5, 10, 20, 100, 200, 999]

console.log("----------find()-------------");
// find -> nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thỏa điều kiện
const numbers = [1, 100, , 55, 200, 999, 10, 20, 5];
const findYourNumber = numbers.find((element) => element > 100);
// nếu không tìm thấy thì nó sẽ trả vê kết quả là undefined
console.log(findYourNumber); //200

console.log("----------findIndex(element) => element -------------");
//  findIndex -> nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const findYourIndex = numbers.findIndex((element) => element > 100);
console.log(findYourIndex); //4

console.log("----------map(callback(value, index, array))-------------");
// map -> duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5];
// trả ra một mảng mới mà các số (giá trị) trong mảng cũ nhân 2
// .map(callback(value, index, array))
const listNumberDouble = listNumber.map(function (value, index, array) {
  return value * 2;
});
console.log(listNumberDouble);


console.log("----------forEach((value, index, array))-----------------");
// forEach -> cũng duyệt qua từng phần tử trong mảng nhưng không trả ra mảng mới và không có return
const listNumberTripple = listNumber.forEach((value, index, array) => {
  return value * 3;
});
console.log(listNumberTripple); //undefined
// Hãy cho biết sự khác nhau giữa forEach và map
// Map thì có return còn forEach thì không
// Map thì trả về mảng dựa trên mảng bên đầu, còn forEach vì không có return nên ko trả về gì hết.
// Map thì có thể dừng còn forEach thì chạy vô hạn không dừng được

console.log("----------filter(callback(value, index, array))----------");
// filter -> Dùng để sàng lọc các phần tử trong mảng thỏa điều kiện nào đó
// .filter(callback(value, index, array))
const greaterThanThree = listNumber.filter((value, index, array) => {
  return value > 3;
});
console.log(greaterThanThree);

console.log("----------some(value)----------");
// some and every return boolean
// some return true khi thỏa một điều kiện và ngược lại trả về false khi không thỏa điều kiện nào cả
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber);
console.log("----------every(value)----------");
// every nó chỉ trả về true khi tất cả điều kiện đều đúng và ngược lại chỉ cần một cái sai sẽ return flase
const everyNumber = listNumber.every((value) => value > 4);
console.log(everyNumber);

console.log("----------reduce(value)----------");
// reduce -> gom các phần tử trong mảng về giá trị
// .reduce((a,b) => {} , initialize value);
const totalNumber = listNumber.reduce(function (previousValue, currentValue) {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
}, 0);
console.log(totalNumber);
