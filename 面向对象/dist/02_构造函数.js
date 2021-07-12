"use strict";
class Dog {
    constructor(name, age) {
        // 在实例方法中，this 指向当前的实例
        // 那么构造函数中 this 指向当前新建的那个实例对象
        console.log('调用构造函数');
        console.log(this);
        this.name = name;
        this.age = age;
    }
    bark() {
        // 在实例方法中，this 指向当前的实例
        console.log(this.name + '叫了');
    }
}
const dog1 = new Dog('旺财1', 2);
console.log(dog1);
dog1.bark();
const dog2 = new Dog('旺财2', 4);
console.log(dog2);
