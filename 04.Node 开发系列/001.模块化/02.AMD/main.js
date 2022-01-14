// ! AMD 是一个异步模块加载机制规范。
// ? requirejs 实现该规范
requirejs(['./modules/bar.js', './modules/foo.js'], function (bar, foo) {
  // bar
  console.log(bar.name)
  bar.sayHello('Lee')

  // foo
  console.log(foo.name)
  bar.sayHello('Foo Lee')
})
