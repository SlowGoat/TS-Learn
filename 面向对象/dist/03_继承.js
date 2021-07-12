"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('说你好');
        }
    }
    class Cat extends Animal {
        // 构造函数传入的参数应与新建对象传入的参数相对应
        constructor(name, type) {
            // 父类构造函数调用传参
            super(name);
            this.type = type;
        }
        // 重写父类的实例方法，其中super可以理解成父类的实例对象
        sayHello() {
            super.sayHello();
            console.log('喵喵喵');
        }
        eat() {
            // 使用super 可以调用父类的实例方法
            super.sayHello();
            console.log('吃猫粮');
        }
    }
    let cat = new Cat('小咪', '布偶猫');
    console.log(cat);
    // cat.sayHello()
    cat.eat();
})();
