;(() => {
  console.log('-------------- 02. 函数上下文 -----------------')
  function foo(a) {
    var b = 2
    function c() {}
    var d = function () {}

    b = 3
  }
  foo(1)

  console.log('上面示例的进入函数上下文时 AO，此时函数还未执行')

  // AO = {
  //   arguments: {
  //     a: 1,
  //     length: 1
  //   },
  //   a: 1,
  //   b: undefined,
  //   c: reference to function c() {},
  //   d: undefined,
  // }
  console.log('函数执行阶段，上下文中的 AO')
  // AO = {
  //   arguments: {
  //     a: 1,
  //     length: 1
  //   },
  //   a: 1,
  //   b: 3,
  //   c: reference to function c() {},
  //   d: reference to FunctionExpression "d",
  // }
})()
