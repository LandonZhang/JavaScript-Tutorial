"use strict";

// var zzzongzii = {
//   name: "Landon",
//   birth: 2004,
//   age: function () {
//     let year = new Date().getFullYear();
//     return year - this.birth;
//   },
// };

// console.log(zzzongzii.age());

// function getAgg() {
//   let year = new Date().getFullYear();
//   return year - this.birth;
// }

// var Landon = {
//   birth: 2024,
//   age: getAgg,
// };

// console.log(Landon.age());

// * apply 与 call
var zzzongzii = {
  name: "zzzongzii",
};

var Landon = {
  name: "Landon",
};

function greeting(country) {
  console.log(`Hello! My name is ${this.name} and I'm from ${country}`);
}

// 使用apply(使用列表传入函数参数)
greeting.apply(Landon, ["USA"]);

// 使用call(直接传入参数)
greeting.call(zzzongzii, "China");

let map = new Map([
  ["Landon", 100],
  ["Alice", 90],
  ["Jack", 80],
]);
console.log(map);
console.log(map.get("Landon"));

let dic = new Map([["ZZZ", 100]]);
console.log(dic.get("ZZZ"));

let st = new Set([1, 1, 2, 2, 3]);
st.add(12);
console.log(st);
