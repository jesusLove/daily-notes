(() => {
  console.log('---------------02.执行上下文栈---------------')
  // ! 执行上下文种类：全局（唯一）、函数（不限）、eval(不常用)。
  // ! 管理上下文：Execution context stack (ECS)
  

  function foo3(){
    console.log('foo3')
  }
  function foo2() {
    foo3()
  }
  function foo1() {
    foo2()
  }
  foo1()

  // 执行上下文栈 
  // const ECStack = []
  // 1. 函数执行时，首先创建 globalContext 全局上下文，压入栈中。
  // ECStack = [
  //   globalContext
  // ]
  // 2. 当函数执行时，会创建上下文并压入栈中，当函数执行完毕从栈中弹出。
  
  // 执行过程伪代码
  // * foo1()
  // ECStack.push(<foo1> functionContext)
  // * foo2()
  // ECStack.push(<foo2> functionContext)
  // * foo3()
  // ECStack.push(<foo3> functionContext)
  // * foo3 执行完毕
  // ECStack.pop()
  // * foo2 执行完毕
  // ECStack.pop()
  // * foo1 执行完毕
  // ECStack.pop()

  // * 最终，ECStack 底层有个 globalContext 。
})()