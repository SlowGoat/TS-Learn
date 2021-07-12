// 1.先声明后赋值
let a: number

a = 10
a = 30
a = '11111'

let b: string
b = '1111'
b = 123

// 2.1声明完直接赋值
let c: boolean = false
c = true
c = 123

// 2.2如果声明赋值同时进行，ts可以自动对变量类型进行检测（两种 写法等价）
let d = false
d = true
d = 123

// 3.函数参数类型限制
function sum(a: number, b: number): number {
  // return a + b + '123'
  return a + b
}

sum(123, '456')
sum(123, 456, 789)
sum(123)
sum(123, 456)

let res = sum(123, 1)


export default void 0
