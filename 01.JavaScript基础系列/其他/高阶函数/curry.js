const add = (...args) => args.reduce((a, b) => a + b)
// * 简化写法
// ! 延迟计算
// ? 用闭包把传入的参数保存起来，当传入足够的参数后再执行函数求值。
function currying(func) {
  const args = []
  return function result(...rest) {
    if (rest.length === 0) {
      // 无参数时，真正求值
      return func(...args)
    } else {
      // 保存参数
      args.push(...rest)
      return result
    }
  }
}
const sum = currying(add)

sum(1,2)(3)(4) // 未求值
console.log('sum: ', sum()) // sum: 10

// ! 动态创建函数
// 这种方法：只在第一次部分计算后，不用在进行 if..else 判断。
// const addEvent = (function() {
//   if (window.addEventListener) {
//     return function(type, el, fn, capture) {
//       el.addEventListener(type, fn, capture)
//     }
//   } else if (window.attachEvent) {
//     return function(type, el, fn) {
//       el.attachEvent('on' + type, fn)
//     }
//   }
// })()

// ! 参数复用
// toStr 等价于 Object.prototype.toString.call()

const toStr = Function.prototype.call.bind(Object.prototype.toString)

console.log(toStr('1')) // [object String]
console.log(toStr([1,2,3])) // [object Array]
