(() => {
  console.log('---------------01.代码执行顺序---------------')
  var foo = function() {
    console.log('foo1')
  }
  foo() // foo1
  var foo = function() {
    console.log('foo2')
  }
  foo() // foo2
  // ! 两次调用 foo 输出结果：foo1 和 foo2，变量提升

  function bar(){
    console.log('bar1')
  }
  bar() // bar2
  function bar() {
    console.log('bar2')
  }
  bar() // bar2
  // ! 两次调用 bar 输出结果：bar2，函数提升

  // JavaScript 中代码执行需要前期准备：创建阶段，然后才是执行阶段。
})()