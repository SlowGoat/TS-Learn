"use strict";
(function () {
    /*
      使用场景：
      在定义函数或者是类时，如果遇到类型不明确可以使用泛型
    */
    /*
      1. 方法中使用泛型
    */
    function myFn1(a) {
        return a;
    }
    // 不指定泛型，TS自动对类型进行推断
    let result1 = myFn1(123);
    console.log(result1);
    // 手动指定泛型
    let result2 = myFn1(456);
    console.log(result2);
    /*
      泛型可以同时指定多个
    */
    function myFn2(a, b) {
        console.log(a);
        return b;
    }
    myFn2(123, 'str');
    function myFn3(a) {
        return a.length;
    }
    console.log(myFn3('123'));
    console.log(myFn3({ length: 6 }));
    /*
      2. 类中使用泛型
    */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
    }
    let mclass = new MyClass('slowgoat');
    console.log(mclass);
})();
