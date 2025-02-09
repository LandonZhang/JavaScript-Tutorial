"use strict";

let student = {
  name: "Landon",
  age: 20,
  school: "SHU",
};

// * 转化为JSON格式
let obj = JSON.stringify(student);
console.log(obj);
console.log(typeof obj);

// * 将JSON格式回转
let pure = JSON.parse('{"name":"Landon","age":20,"school":"SHU"}');
console.log(pure);
console.log(typeof pure);
