"use strict";
let now = new Date(); // 获得完整时间
console.log(now);

// 获得年份
let year = now.getFullYear();
console.log(year);

// 获得月份
let month = now.getMonth();
console.log(month); // 月份是从0开始

// 获得日期
let date = now.getDate();
console.log(date);

// 获得星期
let day = now.getDay();
console.log(day);

// 获得小时
let hour = now.getHours();
console.log(hour);

// 获得分钟
let minute = now.getMinutes();
console.log(minute);

// 获得秒钟
let second = now.getSeconds();
console.log(second);

// 获取时间戳（全时间统一时间，从1970-1-1 0：00：00开始计算）
console.log(now.getTime());

// 翻译实践戳
let realDate = new Date(1738999454266);
console.log(realDate);

// 转化为标准格式
console.log(realDate.toString());
console.log(realDate.toTimeString());
console.log(realDate.toDateString());
console.log(realDate.toLocaleString());
console.log(realDate.toLocaleDateString());
console.log(realDate.toLocaleTimeString());
console.log(realDate.toUTCString());
