"use strict"
let arr = [1, 2, 3, 'abc', 'JavaScript'];

// 获取数组长度
console.log(arr.length);

// 获取数组切片
console.log(arr.slice(-2, -1));

// 将数组与其他数组连接
let arr_1 = [2, 3, 4];
console.log(arr.concat(arr_1));
console.log(arr)

// 将数组进行排序
let arr_2 = ['b', 'a', 'c']
console.log(arr_2);
console.log(arr_2.sort())
console.log(arr_2)

// 将数组进行反转
console.log(arr_2.reverse())
console.log(arr_2)

// 使用join进行数组元素拼接
console.log(arr_2.join(" "))
console.log(arr_2)

// 向尾部加入元素与删除元素
console.log(arr_2.pop())
console.log(arr_2);
console.log(arr_2.push('a'))
console.log(arr_2);

// 向头部添加元素与删除元素
console.log(arr_2.unshift('d'))
console.log(arr_2.shift())
console.log(arr_2)

