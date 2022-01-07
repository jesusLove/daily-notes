var scope = 'global scope'
function checkscope() {
  var scope2 = 'local scope'
  return scope2
}
checkscope()

console.log('执行上下文：作用域链和变量对象的创建过程。')

// !1. checkscope 函数被创建，保存作用域链到内部属性[[scope]]

// checkscope.[[scope]] = [
//   globalCentext.VO
// ]

// !2. 执行 checkscope 函数，创建上下文并压入栈中。

// ECStack = [
//   checkscopeContext,
//   gloablContext
// ]

// !3. checkscope 函数并不立即执行，准备工作，第一步：复制函数 [[scope]]属性创建作用域链

// checkscopeContext = {
//   Scope: checkscope.[[scope]]
// }

// !4. 第二步：用 arguments 创建活动对象，

// checkscopeContext = {
//   AO: {
//     arguments: {
//       length: 0
//     },
//     scope2: undefined,
//   },
//   Scope: checkscope.[[scope]]
// }

// !5. 第三步，将活动对象压入 checkscope 作用域链顶端

// checkscopeContext = {
//   AO: {
//     arguments: {
//       length: 0
//     },
//     scope2: undefined,
//   },
//   Scope: [AO, [[Scope]]]
// }

// !6 准备工作完毕，开始执行函数，修改 AO 值

// checkscopeContext = {
//   AO: {
//     arguments: {
//       length: 0
//     },
//     scope2: 'local scope'
//   },
//   Scope: [AO, [[Scope]]]
// }
// !7. 查找到 scope2 的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出。

// ECStack = [
//   globalContext
// ]
