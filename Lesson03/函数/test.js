"use strict";

function add(x, y) {
  console.log("这是第一个add函数");
  console.log(`${x}与${y}相加的结果是:${x}`);
  return x + y;
}

add(1, 2);

// * 重新定义一个 add 函数，原函数会被直接替换掉
function add(a, b) {
  console.log("这是第二个add函数");
  console.log(`${a}与${b}相加的结果是:${a + b}`);
}

add(3, 4);

function close() {
  let x = 2;
  function inner() {
    console.log(x);
    x += 1;
  }
  inner();
  x = 4;
  inner();
  console.log(x);
}

close();

function test() {
  let x = "x" + y;
  console.log(x);
  var y = "y";
}

// test();

let x = 2;
function test() {
  console.log(x);
}
test();
