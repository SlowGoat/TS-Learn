class Person {
  /* 
    1.定义实例属性 
  */
  name1: string = '孙悟空'
  readonly name2: string = '孙悟空' // readonly 修饰符表示只读
  name3 = '赛亚人'   // 自动类型判断

  /* 
    2.定义类属性（静态属性），即直接类名访问，不需要通过实例对象访问 
  */
  static age1: number = 18
  static readonly age2: number = 18

  /*
    3.定义实例方法
  */
  sayHello1() {
    console.log('Hello 大家好1');
  }

  /*
    4.定义类方法（静态方法）, 直接类名调用
  */
  static sayHello2() {
    console.log('Hello 大家好2');
  }  
}

const per = new Person()

// console.log(per.name1);
// per.name1 = 'tom1'
// console.log(per.name1);


per.sayHello1()
Person.sayHello2()

