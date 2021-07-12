(function () {

  /*
    接口用法1： 可以当作类型声明去使用（类似type）
  */

  type MyType = {
    name: string,
    age: number
  }

  let obj1: MyType = {
    name: '我自己定义的类型',
    age: 11
  }

  // 使用接口实现自定义类型
  interface typeInterface {
    name: string
  }

  // 接口是可以重复定义的，作用是把同名接口的内容作并集处理
  interface typeInterface {
    age: number
  }

  let obj2: typeInterface = {
    name: '用接口实现自定义类型',
    age: 11
  }

  console.log(obj2);

  /*
    接口用法2： 用来定义一个类的结构，继而限制类的结构（制定类标准）
      定义一个标准，使实现这个接口的类的属性和方法必须符合这个接口的规范
        接口只定义结构，不考虑实际值（属性不能有实际的值）
        接口中的所有方法都是抽象方法
  */

  interface classInterface {
    name: string

    drink(): void
  }

  class Student implements classInterface {
    name: string;    

    constructor(name: string) {
      this.name = name
    }
    
    drink() {
      console.log('学生喝水');
    }
  }

  let std = new Student('小明')
  console.log(std);
  std.drink()

})()