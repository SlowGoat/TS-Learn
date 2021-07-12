(function () {

  /**
    abstract 开头的类是抽象类
      抽象类和其他类区别不大，只是不能用来创建实例对象
      抽象类就是专门用来被继承的类
  */

  abstract class Person {

    name: string

    constructor(name: string) {
      this.name = name
    }

    eat() {
      console.log('吃饭');
    }

    /**
      abstract 开头的方法是抽象方法
        1.抽象方法只能定义在抽象类中
        2.抽象方法没有方法体，具体实现在继承这个类的子类中编写（必须重写）
    */

    abstract read(): void

  }

  class Student extends Person {

    read() {
      console.log('看报纸');
    }
  }

  // let person = new Person('小明')
  let student = new Student('小红')
  console.log(student);
  student.eat()
  student.read()
  

})()