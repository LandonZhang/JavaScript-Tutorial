"use strict";

// * python中的序列解包在JS中称作拓展运算符 ...
let arr1 = [1, 2 ,3];
let arr2 = [4, 5, 6];
console.log([...arr1, ...arr2]);

// 创建一个map对象
let map = new Map([["Landon", 100], ["Alice", 90], ["Jack", 80]]);
console.log(map);
// 获取其中元素
console.log(map.get("Landon"));
// 向其中添加元素
map.set("Tom", 87);
console.log(map);

map.set("Lucky", 60)
    .set("fuck", 59);
console.log(map);

// 删除其中元素
map.delete("Tom");
console.log(map);

// * 以下是集合实验
let mySet = new Set([1, 2, 1, 1, 1])
console.log(mySet);

// 向其中添加数据
mySet.add(3);
console.log(mySet);

// 从其中删除元素
mySet.delete(2)
console.log(mySet);

// 判断其中是否存在某个元素
console.log(mySet.has(1));

// 使用Set数据去除Array中重复元素
let set = new Set([1, 1, 2, 2, 1, 3]);
console.log(set);
let myList = Array.from(set);
console.log(myList);

// *使用拓展运算符
console.log([...set]);