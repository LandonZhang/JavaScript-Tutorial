"use strict";

// // * 定义一个对象
// let landon = {
//   name: "Landon",
//   run: function () {
//     console.log(`${this.name} is running...`);
//   },
// };

// // * 再定义另一个对象
// let kimi = {
//   name: "kimi",
// };
// console.log(kimi);
// // kimi,run();

// // * 让kimi继承landon的奔跑
// kimi.__proto__ = landon; // 设置kimi的‘模板’是landon
// kimi.run();

// // * 使用构造函数创建一个对象，并设置继承关系
// function Student(name) {
//   this.name = name; // this指向调用函数新增的对象，并给新增对象新增name属性
// }

// let zzzongzii = new Student("zzzongzii");
// console.log(zzzongzii);

// let landon = new Student("landon");
// console.log(landon);

// // * 新增方法的两种方式
// // 修改父类的父类
// Student.prototype.greeting = function () {
//   console.log(`Hello, My name is ${this.name}`);
// };
// Student.prototype.grade = 100;

// zzzongzii;
// landon;
// 修改构造函数Student
// function Student(name) {
//   this.name = name; // this指向调用函数新增的对象，并给新增对象新增name属性
//   this.grade = 100;
//   this.greeting = function () {
//     console.log(`Hello, My name is ${this.name}`);
//   };
// }

// * 使用class来定义一个类
class Student {
  // 初始化属性(使用构造函数 constructor 来统一初始化属性，在之后直接写方法定义即可，甚至不用function)
  constructor(name) {
    this.name = name;
  }

  // 添加方法
  greeting() {
    console.log(`Hello, My name is ${this.name}`);
  }
}

let zzzongzii = new Student("zzzongzii");
zzzongzii;
zzzongzii.greeting(); // 'Hello, My name is zzzongzii'

let landon = new Student("landon");
landon;
landon.greeting();

// * 给对象新增属性或者方法
zzzongzii.score = 100;
zzzongzii.showScore = function () {
  console.log(`My score is ${this.score}`);
};
zzzongzii;
zzzongzii.showScore();

// * 给类新增属性或方法(使用prototype)
Student.prototype.status = "Good";
Student.prototype.showStatus = function () {
  console.log(`My status is ${this.status}`);
};
zzzongzii;
zzzongzii.showStatus();

// ! 错误实践：直接给 Student 增加方法和属性，并在实例中访问调用
// Student.school = "UNKNOWN";
// Student.showSchool = function () {
//   console.log(`My school is ${this.school}`);
// };
Student.prototype.school = "SHU";
Student.prototype.showSchool = function () {
  console.log(`My school is ${this.school}, nice to meet you!`);
};
console.log(zzzongzii.school);
console.log(zzzongzii.showSchool());

// * 类的继承 extends
class AdvancedStudent extends Student {
  constructor(name, tag) {
    super(name); // 一定要先调用父类的构造函数，子类的this是引用父类的this指向的实例的，不然子类无法使用 this 关键字
    this.tag = tag;
  }

  // 重写方法
  greeting() {
    super.greeting();
    console.log(`Hello, My name is ${this.name} and my tag is ${this.tag}`);
  }
}

let LandonZhang = new AdvancedStudent("LandonZhang", "awesome");
LandonZhang.greeting();
