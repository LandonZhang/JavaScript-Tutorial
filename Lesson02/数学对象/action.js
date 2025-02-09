"use strict";

// 尝试数学 Math 常量
// * 圆周率
console.log(Math.PI);
// * 根号2
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
// * 表示角度
console.log(120 / 180 * Math.PI);

// 尝试 Math 函数
// * 最大最小值，要求输入为使用序列拓展符拓展后的数
let lst = [5, 2, 1, 3, 4];
console.log(Math.max(...lst));
console.log(Math.min(...lst));


// * 尝试向下向上取整
console.log(Math.floor(3.99));
console.log(Math.ceil(3.01));

// * 其他不常用函数
console.log(Math.abs(-15));  // 求绝对值
console.log(Math.pow(2, 3));  // 求 2 ^ 3
console.log(Math.sqrt(2));  // 求根号2
console.log(Math.exp(2));  // 求 e^2

// * 给出 0-1 随机数
console.log(Math.random());
console.log(Math.random() * 20);  // 生成 0-20 的随机数
console.log(Math.random() * 0.7 + 3.300001);  // 生成 3.3-4.0 之间的数

// * 给出任意范围内的整数
console.log(Math.floor(Math.random() * 10 + 1));  // 0-10 内整数
console.log(Math.floor(Math.random() * 91) + 10);

// * 实验：结合随机数构造10位数密码
let source = "0123456789abcdefghijklmnopqrstuvwABCDEFGHIJKLMNOPQRSTUVW";
let arr = source.split("");
let result = "";
for(let i = 0; i < 10; i++){
    let random_int = Math.floor(Math.random() * source.length);
    result += source[random_int];
}
console.log(`最终的密码为: ${result}`);