;(function () {
  console.log('-------------------- 002.__proto__ --------------------')
  function Person() {}
  const p = new Person()

  console.log('对象 p 的 __proto__ 属性 => ', p.__proto__)

  console.log('对象 p.__proto__ 和 Person.prototype 属性 => ', p.__proto__ === Person.prototype)

  // __proto__ 并不是所有浏览器都支持，推荐使用 Object.getPrototypeOf() 获取原型对象
  console.log('ES5 Object.getPrototypeOf 获取原型对象 => ', Object.getPrototypeOf(p), '\n等于 p.__proto__ => ', Object.getPrototypeOf(p) === p.__proto__)


  console.log('Person.__proto__ === Function.prototype => ', Person.__proto__ === Function.prototype)
  // ! 鸡蛋问题
  // ? Function 作为内置对象，运行前就已经存在。
  // * 1. 为了风格统一
  // * 2. 表明关系
  console.log('Function.__proto__ === Function.prototype =>', Function.__proto__ === Function.prototype)
})()
