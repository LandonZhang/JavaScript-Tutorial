let name = 1;

// for (let index = 0; index < 3; index++) {
//     name += 1;
//     console.log(name);
// }

// while(name < 10){
//     name += 1;
//     console.log(`${name} < 10`);
// };

// * forEach方法，相当于map函数，将可迭代对象中的每个值都放入函数中执行
let arr = [1, 3, 2, 4, 7];

function show(value){
    console.log(value);
};

console.log(arr.forEach(show));

// * for(sth in sth)获得数组中每一个元素的索引值
for(let a in arr){
    if(arr.hasOwnProperty(arr[a])){
        console.log("存在");
    }
    console.log(a);
};

