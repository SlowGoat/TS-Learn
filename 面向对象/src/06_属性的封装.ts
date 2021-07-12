(function () {

  /*
    TS 可以在属性前添加属性的修饰符
      public 修饰的属性可以在任何位置访问/修改，同时也是默认值
      protected 只能在当前类和当前类的子类中访问/修改
      private 只能在当前类的内部进行访问/修改
              -通过在类中添加get,set方法使得私有属性可以被外访问
  */

  class Person {

    name1: string // 默认就是public
    public name2: string

    protected _age: number

    private _gender: string

    constructor(name1: string, name2: string, age: number, gender: string) {
      this.name1 = name1
      this.name2 = name2
      this._age = age
      this._gender = gender
    }

    /*
      JS 的getter setter 写法
    */    
    getGender() {
      return this._gender + '-js'
    }

    setGender(value: string) {
      this._gender = value
    }

    /*
      TS 的getter setter 写法
    */

    get gender() {
      console.log('getter方法执行')
      return this._gender
    }

    set gender(value: string) {
      // 可以加入自己的一些过滤规则
      if(value === '男' || value === '女') {
        this._gender = value
      }
    }

  }

  class Student extends Person {
    read() {
      // console.log(this.gender);
      console.log(this._age);
    }
  }

  let std = new Student('名字1', '名字2', 13, '男')
  std.read()
  // console.log(std.age);
  console.log(std.gender);
  std.gender = '女'
  console.log(std.gender);
  std.gender = '未知'
  console.log(std.gender);
  console.log(std.getGender());
  
  /*
    TS 类初始化的简便写法
  */
  class PersonEasy {
    
    constructor(private _name: string, protected _age: number, public gender: string) {

    }

    get name() {
      return this._name
    }
  }

  let personEasy = new PersonEasy('hhha', 13, '男')
  console.log(personEasy.name);
  
  

})()