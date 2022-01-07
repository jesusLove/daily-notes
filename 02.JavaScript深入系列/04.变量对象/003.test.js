;(() => {
  console.log('--------------- 03. 测试 ------------')
})()

// function foo() {
//   console.log(a)
//   a = 1
// }

// foo() // ??? error
// ! 没有通过 var 声明， AO 中不存在

function bar() {
  a = 1
  console.log(a)
}
bar() // 1

// ! 打印函数，而不是 undefined
// ! 变量声明不会覆盖之前
console.log(foo)

function foo() {
  console.log('foo')
}
var foo = 1
// ! 变量声明不会覆盖函数声明的 foo。

// 进入上下文时，首先处理函数声明，其次变量声明。
// 如果变量声明根已声明的形式参数或函数相同，则变量声明不干扰已存在的属性。
