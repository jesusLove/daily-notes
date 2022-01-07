;(function () {
  console.log('-------------------- 001.prototype --------------------')
  function Person() {}
  // 每个函数都有一个 prototype 属性
  console.log('Person 原始的 prototpe => ', Person.prototype) // Object

  // 修改 Person 原型属性
  Person.prototype.name = 'Lee'
  console.log('Person 的 prototype 添加 name 属性 => ', Person.prototype)
  console.log('对象 {} 没有 prototype? => ', {}.prototype) // undefined

  const p1 = new Person()
  const p2 = new Person()

  console.log('p1 的 name 值 => ', p1.name)
  console.log('p2 的 name 值 => ', p2.name)

  // 构造函数和实例原型之间的关系

  // Person ---- prototype ----> Person.prototype
})()
