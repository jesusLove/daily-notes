(() => {
  console.log('---------------- 001.scope ----------------')

  var value = 1
  function foo() {
    console.log('静态作用域：当前 value 值 => ', value)
  }
  function bar() {
    var value = 2
    foo()
  }
  bar()
  console.log('动态作用域：value 值为 ', 2, ' => 通过 scope.bash 验证')
})()
