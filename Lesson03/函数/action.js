"use strict";

// 使用非匿名函数
function showDate(x) {
  switch (x) {
    case 1:
      console.log("星期一");
      break;
    case 2:
      console.log("星期二");
      break;
    default:
      console.log("不知道");
  }
}

showDate(2);

// 使用匿名函数
let abs = function (x) {
  console.log("函数中参数的个数为:", arguments.length);

  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
};

console.log(abs(-2));

// JS中函数的随意性(不填参数不会报错)
console.log(abs());

// 填过多的参数不会报错(只对第一个参数进行函数操作)
console.log(abs(-1, 2, 1, 2, 3));

// 函数中自带的 arguments 属性
function add(x, y) {
  if (arguments.length === 2) {
    console.log(`${x}与${y}的值相加结果是:${x + y}`);
  }

  // * 抛出异常提醒
  else if (arguments.length < 2) {
    throw "Too less arguments!";
  } else {
    throw "Too many arguments!";
  }
}

add(1, 2, 3);

add(1);

// 使用元素拓展符承接并访问超额参数
// * 传统方法
function add(x, y) {
  if (arguments.length === 2) {
    console.log(`${x}与${y}的值相加结果是:${x + y}`);
  } else if (arguments.length > 2) {
    let temp = [];
    for (let i = 2; i < arguments.length; i++) {
      temp.push(arguments[i]);
    }
    console.log("多余参数的值为:", temp);
  }
}

add(1, 2, 3, 4);

// * 现代方法
function add(x, y, ...rest) {
  if (arguments.length === 2) {
    console.log(`${x}与${y}的值相加结果是:${x + y}`);
  } else {
    console.log("多余参数为:", rest);
  }
}

add(1, 2, 3, 4, 5);

function test(x, y, ...rest) {
  console.log("函数接受的多余参数有:", rest);
}

test(1, 2, 3, 4, 5);
