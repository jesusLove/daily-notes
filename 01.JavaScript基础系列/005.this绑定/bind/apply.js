/** 
 * 实现思路：对象方法调用
 */
Function.prototype.apply1 = function(context, args) {
  context = context ? Object(context) : window
  // 调用者作为 context 的 fn 属性
  context.fn = this
  // 返回值
  let result
  // 是否有参数
  if(!args) {
    result = context.fn()
  } else {
    result = context.fn(...args)
  }
  // 删除属性
  delete context.fn
  return result
}