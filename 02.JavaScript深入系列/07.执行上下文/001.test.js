var scope = 'global scope'
function checkscope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f()
}
checkscope()

// !1. 执行全局，创建全局上下文压入执行上下文栈中。
// ECStack = [globalContext]
// !2. 全局上下文初始化
// globalContext = {
//   VO: [global],
//   Scope: [globalContext.VO],
//   this: globalContext.VO
// }
// !3. 初始化的同时，checkscope 函数被创建，保存作用域链到函数的内部属性[[scope]]
// checkscope.[[scope]] = [
//   globalContext.VO
// ]

// !4. 执行 checkscope 函数，创建 checksope 函数执行上下文压入栈中。
// ECStack = [
//   checkscopeContext,
//   globalContext
// ]

// !5. checkscope 函数执行上下文初始化
// 复制函数 [[scope]] 属性创建作用域链，
// 用 arguments 创建活动对象，
// 初始化活动对象，即加入形参、函数声明、变量声明，
// 将活动对象压入 checkscope 作用域链顶端。
// 同时 f 函数被创建，保存作用域链到 f 函数内部属性[[scope]]

// checkscopeContext = {
//   AO: {
//     arguments: {
//       length: 0
//     },
//     scope: undefined,
//     f: reference to function f(){}
//   },
//   Scope: [AO, globalContext.VO],
//   this: undefined
// }

// !6. 执行 f 函数创建上下文，压入栈中
// ECStack = [
//   fContext,
//   checkscopeContext,
//   globalContext
// ]

// !7. 函数执行上下文创建
// 复制函数 [[scope]] 属性创建作用域链
// 用 arguments 创建活动对象
// 初始化活动对象，即加入形参、函数声明、变量声明
// 将活动对象压入 f 作用域链顶端
// fContext = {
//     AO: {
//         arguments: {
//             length: 0
//         }
//     },
//     Scope: [AO, checkscopeContext.AO, globalContext.VO],
//     this: undefined
// }

// !8. f 函数执行，沿着作用域链查找scope值，返回 scope 值。

// !9. f 函数执行完毕，f 函数从栈中弹出

// ECStack = [
//   checkscopeContext,
//   globalContext
// ]
// !10. checkscope 执行完毕

// ECStack = [
//   globalContext
// ]

// 另一个例子
// var scope = 'global scope'
// function checkscope() {
//   var scope = 'local scope'
//   function f() {
//     return scope
//   }
//   return f
// }
// checkscope()()
