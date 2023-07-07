// 1. Viết 1 function kiểm tra value có phải là object hay không?

// 2. {a: 1, b: 2} -> [["a", 1], ["b", 2]]

// 3. truyền object ({a: 1, b: 2}, 'b') -> {a: 1}

// 4. kiểm tra 2 object truyền vào có bằng nhau hay không?


console.log("------------------Bai 1----------------------");
function isObject(value){
    if(typeof value === "object" && !Array.isArray(value) && value !== null){
        return true;
    }
    return false;
}
// {}
// plan object -> true else return false
console.log(isObject({}));      //true
console.log(isObject([]));      //false
console.log(isObject(null));    //false
console.log("------------------Bai 2----------------------");
function objectToArray(object){
    // check nếu không phải object thì dừng
    if(!isObject(object)) return;
    // nếu là object thì xử lí có 3 cách sử dụng cách nào cũng được
    // cách 1
    // return Object.entries(object);
    // cách 2
    // [a, b]
    // const value = Object.keys(object).map(key => [key, object[key]]);
    // return value;
    // cách 3
    let result = [];
    for(let key in object){
        // hasOwnProperty(key) -> nếu object chứa key trả về true ngược lại false
        if(object.hasOwnProperty(key)){
            result.push([key, object[key]]);
        }
    }
    return result;
}
console.log(objectToArray({a: 1, b: 2}));

// bài 3
console.log("------------------Bai 3----------------------");
function withOut(object, ...key){
    const newObject = {...object};      // clone ra 1 object mới
    key.forEach(item => {
        delete newObject[item];         // xóa key của object
    });
    return newObject;                   // return 1 object mới
    // delete object[key];
    // return object;
}
console.log(withOut({a: 1, b: 2, c: 3}, "a", "b"));

// bài 4
console.log("------------------Bai 4----------------------");
function isEqualObject(obj1, obj2){
    // check key.length của 2 obj
    const objkey1 = Object.keys(obj1);         // lấy ra key của obj1
    const objkey2 = Object.keys(obj2);         // lấy ra key của obj2
    if(objkey1.length !== objkey2.length) return false;
    // check value của 2 obj
    const result = objkey1.every(key => obj1[key] === obj2[key]);
    return result;
}
console.log(isEqualObject({a: 1}, {a: 1, b: 2}));



