// 1.也可以直接使用字面量（具体取值）进行类型声明，可理解成常量
let a: 10;
a = 10
a = 20

// 2.可以使用 |（或） 来连接多个 字面量 或 参数类型（称作联合类型）
// 2.1 多个字面量
let b: 'male' | 'female'
b = 'male'
b = 'female'
b = '111'
// 2.2 多个类型
let c: string | number
c = 'aa'
c = 123
c = false

// 3其他类型

// 3.1 any表示任意类型，设置为any表示关闭ts的类型检测（推荐用unknown代替）
// 显式设置any
let d: any  
// 隐式设置any
let e
e = 123
e = '123'
e = false

// 3.2 unknown 表示未知类型的值（相当于类型安全的any，不能直接赋值给其他类型的变量）
let f: unknown
f = 123
f = '123'
f = false

// 3.2.1 any和unknown 区别，any可以赋值给任何一个类型，而unknown不可以
let s: string
s = e
s = f

// 处理方式1
if(typeof f === 'string') {
  s = f
}

// 处理方式2：类型断言 -> 可以告诉编译器变量的实际类型
s = f as string   // 语法1
s = <string> f    // 语法2

// 3.3 void 表示空，以函数为例，表示没有返回值的函数
function voidTest1() {

}

function voidTest2(): void {
  return 111
}

// 3.4 never 表示永远不会返回结果，undefined都不返回了（用的比较少，了解即可）
// 3.4.1 使用场景：报错，一报错程序就结束了，也就不需要返回任何东西
function neverTest(): never {
  throw new Error('报错了！')
}

// 3.5 object 表示一个js对象
let obj: object
obj = {}
obj = function () {}

// 3.5.1 {} 用来指定对象中包含哪些属性
let obj2: {}
obj2 = {name: 'hahaha'}

let obj3: {name: string, age: number}   // 多一个属性少一个属性都不行
obj3 = {name: '123', age: 12}
obj3 = {name: '123', age: 12, sex: 'male'}
obj3 = {name: '123'}

// & 等价写法
let obj3Eq: {name: string} & {age: number}
obj3Eq = {name: 'hh', age: 18}

// 3.5.2 属性名后加? 表示属性名是可选的，可有可无
let obj4: {name: string, age?: number}   
obj4 = {name: '123', age: 12}
obj4 = {name: '123'}

// 3.5.3 对象不定属性写法
// [propName: string]: any 表示任意类型的属性，propName是自定义的，写什么都行
let obj5: {name: string, [propName: string]: any} 
obj5 = {name: '123', age: 12, sex: 'male'}
obj5 = {name: '123'}

// 3.6 设置函数结构的类型声明
// 语法：(形参: 类型, 形参: 类型...) => 返回值类型
let g: (a: number, b: number) => number
g = function (n1: number, n2: number) {
  return n1 + n2
}

// 3.7 数组, 两种语法等价  
// 3.7.1 字符串数组
let strArray: string[]        // 语法1  类型[]
strArray = ['234', 'aaa']
strArray = ['234', 'aaa', 123]

let strArray2: Array<string>  // 语法2  Array<类型>
strArray2 = ['234', 'aaa']

// 3.7.2 数值数组
let numArray: number[]        // 语法1
numArray = [1, 2, 333]
numArray = [1, 2, 333, '111'] 

let numArray2: Array<number>  // 语法2
numArray2 = [1, 2, 333]

// 3.8 元组：元组就是固定长度的数组
// 语法：[类型, 类型]
let h: [string, number]
h = ['123', 123]
h = [123, 123]

// 3.9 enum 枚举类型
enum Gender {
  Male,
  Female
}

// 也可以自己定义值，但一般没必要自己定义
// enum Gender {
//   Male = 0,
//   Female = 1
// }

let i: {name: string, gender: Gender}
i = { name: 'hhh', 
      gender: Gender.Male 
    }

console.log(i.gender === Gender.Male);

// 3.10 类型的别名
type myType1 = string
let x: myType1
x = '122'

type myType2 = 1 | 2 | 3 | 4
let y: myType2
y = 2
y = 5




















export default void 0







