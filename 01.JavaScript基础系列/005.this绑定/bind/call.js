Function.prototype.call1 = function(context) {
  // 对象
  context = context ? Object(context) : window
  // 对象属性
  context.fn = this
  // 参数处理
  let args = [...arguments].slice(1)
  // 执行方法
  let result = context.fn(...args)
  // 删除属性
  delete context.fn
  // 返回结果
  return result
}

// Test

var value = 2
var obj = {
  value: 1
}
function bar(name, age) {
  console.log(this.value)
  return {
    value: this.value,
    name,
    age
  }
}

function foo() {
  console.log(this)
}

bar.call1(null) // 2

bar.call1(123) // undefined

const p = bar.call1(obj, 'lee', 18) // 1
console.log(p) // Object{}



