(() => {
  console.log('---------------03.JavaScript权威指南 例子 ---------------')
  console.log('02小节留的思考题')
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

  console.log('结果相同：ECStack 变化过程？')

  console.log('Test1: ECStack变化过程？')
  /**
   * ECStack.push(<checkscope> functionCentext)
   * ECStack.push(<f> functionCentext)
   * ECStack.pop()
   * ECStack.pop()
   */

  console.log('Test2: ECStack变化过程？')

  /**
   * ECStack.push(<checkscope> functionCentext)
   * ECStack.pop()
   * ECStack.push(<f> functionCentext)
   * ECStack.pop()
   */
})()