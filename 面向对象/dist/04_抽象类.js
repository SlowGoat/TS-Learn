"use strict";
(function () {
    /**
      abstract 开头的类是抽象类
        抽象类和其他类区别不大，只是不能用来创建实例对象
        抽象类就是专门用来被继承的类
    */
    class Person {
        constructor(name) {
            this.name = name;
        }
        eat() {
            console.log('吃饭');
        }
    }
    class Student extends Person {
        read() {
            console.log('看报纸');
        }
    }
    // let person = new Person('小明')
    let student = new Student('小红');
    console.log(student);
    student.eat();
    student.read();
})();
