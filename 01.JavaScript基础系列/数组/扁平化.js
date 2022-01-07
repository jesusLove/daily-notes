const arr = [1, [3, [4, [5, 6]]], 7]

const str = JSON.stringify(arr)
console.log(str)


// ES6
// flat(n) 中 n 展开深度，默认为 1 
const arr_flat = arr.flat(Infinity)
const arr_flat_1 = arr.flat()
const arr_flat_2 = arr.flat(2)
console.log('ES6 - flat', arr_flat)
console.log('ES6 - flat - default', arr_flat_1)
console.log('ES6 - flat - 2', arr_flat_2)


// 替代方案

// reduce + concat 展开一层
const arr_reduce_concat = arr => arr.reduce((acc, val) => acc.concat(val), [])
console.log('reduce+concat:', arr_reduce_concat(arr))

// ... + concat 展开一层
const arr_dot_concat = arr => [].concat(...arr)
console.log('...+concat:', arr_dot_concat(arr))

// 这两个方法只能展开一层
// * 展开多次，使用递归实现
const flatDeep = (arr, depth = 1) => {
  // 拷贝一份新数组
  if (depth <= 0) return arr.slice()
  // 递归调用
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, depth - 1) : val), [])
}
console.log('递归+reduce+concat:', flatDeep(arr, Infinity)) // [1,3,4,5,6,7]
console.log('递归+reduce+concat - 2层：', flatDeep(arr, 2))

// 循环forEach + 递归
const eachFlat = (arr = [], depth = 1) => {
  const res = [];
  (function flat(arr, depth) {
    arr.forEach(el => {
      if (Array.isArray(el) && depth > 0) {
        flat(el, depth - 1)
      } else {
        res.push(el)
      }
    })
  })(arr, depth)

  return res
}

console.log('递归 + each:', eachFlat(arr, Infinity))

// 循环 forof + 递归
const forFlat = (arr =[], depth = 1) => {
  const res = [];
  (function flat(arr, depth) {
    for (const el of arr) {
      if (Array.isArray(el) && depth > 0) {
        flat(el, depth - 1)
      } else {
        res.push(el)
      }
    }
  })(arr, depth)
  return res
}

console.log('递归 + forof:', forFlat(arr, Infinity))

// ! MDN 中说 forEach 会自动忽略 undefined，但测试没有发现忽略。

// 使用栈
const stackFlat = (arr) => {
  const stack = [...arr]
  const res = []
  while(stack.length) {
    // 取出栈顶元素
    const next = stack.pop()
    if (Array.isArray(next)) {
      // 若为数组，展开后压入栈中
      stack.push(...next)
    } else {
      res.push(next)
    }
  }
  return res.reverse()
}
console.log('stack', stackFlat(arr))