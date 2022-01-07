'use strict'
// 递归
function fact(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * fact(num - 1)
  }
}
console.log(fact(4)) // 24
// 问题：
// const ff = fact
// fact = null
// console.log(ff(5)) // error: fact 找不到

// 解决方法：一
function fact1(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * arguments.callee(num - 1)
  }
}
// console.log(fact1(4)) // 24
// 缺点： use strict 严格模式下
// callee / caller 等属性无法使用。

// 解决方法二：采用函数表达式
const fact2 = function f(num) {
  if (num <= 1) {
    return 1
  } else {
    return num * f(num - 1)
  }
}
console.log(fact2(4))

// 使用尾调用：优化递归
// 1. 默认情况下，每次递归都会向压入栈帧。超过一定的数量会导致栈溢出。
// 2. 使用尾调用
function fact3(n) {
  return factImp(1, n)
}
function factImp(a, n) {
  if (n <= 1) {
    return a
  }
  return factImp(a * n, n - 1)
}
console.log(fact3(1000))

// 优化
// 使用 ES6 默认参数
const fact4 = function f(n, total = 1) {
  if (n === 1) return total
  return f(n - 1, n * total)
}
console.log(fact4(4))



// 高阶函数
const isType = type => obj => {
  return Object.prototype.toString.call(obj) === '[object ' + type + ']'
}
console.log(isType('String')('123'))


// 扁平化，去重，升序
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

const flatArr = arr.flat(Infinity)
console.log('flatArr', flatArr) // lq-log 指定深度，合并未新数组

const sortArr = [...new Set(flatArr)].sort((a, b) => a - b) 
console.log('sortArr', sortArr) // lq-log

const add = (...args) => args.reduce((a, b) => a + b)
console.log(add(1, 3))

let sum = currying(add)
