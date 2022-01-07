function foo() {
  function bar() {}
}

// 创建时各自的[[Scope]] 属性值

// foo.[[scope]] = [
//   globalContext.VO
// ]

// bar.[[scope]] = [
//   fooContext.AO,
//   globalContext.VO
// ]
