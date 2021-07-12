"use strict";
(function () {
    /*
      接口用法1： 可以当作类型声明去使用（类似type）
    */
    let obj1 = {
        name: '我自己定义的类型',
        age: 11
    };
    let obj2 = {
        name: '用接口实现自定义类型',
        age: 11
    };
    console.log(obj2);
    class Student {
        constructor(name) {
            this.name = name;
        }
        drink() {
            console.log('学生喝水');
        }
    }
    let std = new Student('小明');
    console.log(std);
    std.drink();
})();
