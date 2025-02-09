"use strict";

// * 函数外部定义的内部可以用，内部定义的外部拿不到
// function outer() {
//   let out = "x";
//   function inner() {
//     let _inner = "y";
//     console.log(_inner + out);
//   }
//   inner();
//   console.log(`inner中的变量是${_inner}`);
// }

// outer();

// * 自动提升变量 Hoist
// function test() {
//   console.log(pi);
//   const pi = "3.14";
// }

// test();

// * 全局作用域 window
// var a = 123;
// console.log(a);
// console.log(window.a)

// alert(1);
// window.alert(2);
// info = window.alert;
// info(3);
// window.alert = {};
// alert(4);

// * 声明唯一的全局变量
var zzzongzii = {};
zzzongzii.name = "Landon"; // 将变量加入自己的局部作用域中进行封装
console.log(zzzongzii.name);
console.log(zzzongzii);
zzzongzii.add = function (x, y) {
  console.log("和为:", x + y);
  return 3;
};
let result = zzzongzii.add(1, 2);
console.log(typeof result);
