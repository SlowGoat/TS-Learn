(function () {

  /*
    使用场景：
    在定义函数或者是类时，如果遇到类型不明确可以使用泛型
  */

  /*
    1. 方法中使用泛型
  */

  function myFn1<T>(a: T) {
    return a
  }

  // 不指定泛型，TS自动对类型进行推断
  let result1 = myFn1(123) 
  console.log(result1);

  // 手动指定泛型
  let result2 = myFn1<number>(456) 
  console.log(result2);

  /*
    泛型可以同时指定多个
  */
  function myFn2<N, S>(a: N, b: S) {
    console.log(a);
    return b
  }

  myFn2(123, 'str')

  // 泛型还可以通过继承接口，进行规范处理
  interface myInter {
    length: number
  }

  function myFn3<T extends myInter>(a: T) {
    return a.length
  }

  console.log(myFn3('123'));
  console.log(myFn3({length: 6}));
  

  /*
    2. 类中使用泛型
  */
  class MyClass<T> {
    public name: T
    constructor(name: T) {
      this.name = name
    }
  }

  let mclass = new MyClass<string>('slowgoat')
  console.log(mclass);
  

})()