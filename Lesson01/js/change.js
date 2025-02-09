// 使用Number转换数字类型
let num = "123";
console.log(Number(num) + 123);

// 转化非数字类型字符串
let str = "abc123"
document.writeln(Number(str) + "<br/>");

// 使用parseInt转化
let num_1 = "123.12abc";
document.writeln(parseInt(num) + "<br/>");  //输出为123

// 只能检测打头的几个数字，无法检测到之后的
let num_2 = "123abc123"
document.writeln(parseInt(num_2) + "<br/>");  //输出为123

// 使用parseFloat转化
let num_3 = "123.12abc";
document.writeln(parseFloat(num_3) + "<br/>");  // 输出为123.12

// 使用toString方法转化数字
let a = 2018;
let b = "1011";
document.writeln(a.toString() + b);  // 输出为20181011