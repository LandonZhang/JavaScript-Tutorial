"use strict"
// 使用模板字符串
let customer = "Landon";
document.writeln(`你好呀！${customer + " the coder"}`);

// 获得字符串长度
document.writeln("<br/>customer字符串的长度为:", customer.length, "<br/>")

// 字符串的不可变性
// document.writeln(customer[0] = "J")  // 不可变，单独返回一个J
document.writeln(customer)  // 依然是 Landon

// 转化大小写
console.log(customer.toUpperCase())
console.log(customer)
console.log(customer.toLowerCase())

// 获取特定字符的索引值
console.log(customer.indexOf('don'))

// 获取特定索引号的字符串
console.log(customer.substring(customer.indexOf('Lan'), customer.indexOf('n')+1))

// 使用chatAt获取特定索引的字符串
console.log(customer[0])

// 使用replace方法进行替换
let newStr = customer.replace(/don/g, "bon")
console.log("oldStr", customer, "<br/>")
console.log("newStr", newStr);

// 使用split操作分割字符串
let arr = customer.split("");
console.log(arr)
console.log()
console.log()

