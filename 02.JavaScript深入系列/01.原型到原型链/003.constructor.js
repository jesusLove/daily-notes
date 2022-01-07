(function () {
  console.log('-------------------- 003.constructor --------------------')
  function Person() {}
  const p = new Person()
  // 原型 Person.prototype 对象的 constructor 属性指向构造函数。
  console.log('Person === Person.prototype.constructor ? =>', Person === Person.prototype.constructor)

  console.log('Person === p.constructor ? => ', Person === p.constructor, '=> p.constructor 就是 Person.prototype.constructor')
})()