"use strict"
let student = {
    name: "Landon",
    age: 20,
    school: "SHU"
};

console.log(student);

// 添加属性
student.score = "良好";
console.log(student.score)

// 查看一个属性是否存在
let expression = 'toString' in student;
console.log(expression);

// 查看一个属性为自有属性
console.log(student.hasOwnProperty('toString'))
console.log(student.hasOwnProperty('name'))

// 获取全部的键、值、键值对
for (const key in student) {
    if (Object.prototype.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}

