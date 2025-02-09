"use strict";

class Basic {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(`Hello! My name is ${this.name}.`);
  }
}

class First extends Basic {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  showAge() {
    console.log(`My age is ${this.age}`);
  }
}

class Second extends First {
  static NAME = "First";
  constructor(name, age, hobby) {
    super(name, age);
    this.hobby = hobby;
  }

  showHobby() {
    console.log(`My hobby is ${this.hobby}. What about you?`);
  }

  static getName() {
    console.log(Second.NAME);
  }
}

let test = new Second("zzzongzii", 10, "code");
console.log(test.hasOwnProperty("showHobby"));
console.log("showHobby" in test);
// console.log(test.NAME);
// console.log(Second.getName());
// console.log(Second.hobby);

// class Student {
//   constructor(name) {
//     this._name = name; // 私有属性命名习惯
//   }

//   get name1() {
//     // ✅ get 关键字
//     return this._name;
//   }

//   set name2(value) {
//     // ✅ set 关键字
//     if (value.length < 2) {
//       console.log("Name is too short!");
//     } else {
//       this._name = value;
//     }
//   }
// }

// const student1 = new Student("Alice");
// console.log(student1.name1); // 调用 getter，输出: Alice
// console.log(typeof student1.name1); // 类型为'string'

// student1.name2 = "Bo"; // 调用 setter
// console.log(student1.name1); // 输出: Bo
// console.log(typeof Math.name2);

// class Student {
//   #privateField = "Secret"; // 私有属性

//   // 定义方法进行访问
//   getSecret() {
//     return this.#privateField;
//   }
// }
// const student1 = new Student();
// console.log(Student.#privateField);
// console.log(student1.getSecret()); // 输出: Secret

// ❌ 外部无法直接访问私有属性
//   console.log(student1.#privateField);  // 报错: Private field '#privateField' must be declared in an enclosing class
// class Father {
//   #privateInfo = "I'm handsome~";

//   static NAME = "First";

//   tellTruth() {
//     console.log(`My private info is ${this.#privateInfo}`);
//   }

//   static tellName() {
//     console.log("father tells you:", this.NAME);
//   }
// }

// class Son extends Father {
//   test() {
//     Father.tellName();
//     console.log(Father.NAME);
//   }
// }

// let son = new Son();
// son.test();
document.getEl;
