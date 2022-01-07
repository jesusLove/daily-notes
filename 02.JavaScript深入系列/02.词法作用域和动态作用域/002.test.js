(() => {
  console.log('---------------- 002.JavaScript权威指南 例子 ----------------')
  var scope = 'global scope'
  function checkscope() {
    var scope = 'local scope'
    function f() {
      console.log('当前读取 scope => ', scope)
    }
    return f()
  }
  checkscope() // local

  function checkscope2() {
    var scope = 'local scope'
    function f() {
      console.log('当前读取 scope => ', scope)
    }
    return f
  }
  checkscope2()() // local

  console.log('JavaScript 静态作用域：函数的作用域基于函数创建的位置')
  
  // 静态作用域 vs 动态作用域 => 作用域链顺序不同
  
  // ! 思考： 输出结果相同，那么两段代码有什么不同点？
  // ? 调用栈
})()