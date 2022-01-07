;(function () {
  console.log('-------------------- 004. 实例与原型、原型的原型、原型链--------------------')
  function Person () {}

  Person.prototype.name = 'Lee'

  const person = new Person()

  person.name = 'QQ'
  console.log('person.name 读取实例属性值 => ', person.name)

  // 查找原型上的 name 值
  delete person.name
  console.log('person.name 读取原型属性值 => ', person.name)

  // 如果 person 原型上 没有 name 值呢？
  // ! 原型的原型
  console.log('Person.prototype 实例对象的原型是什么？ => ', Person.prototype.__proto__) // Object 对象

  // Object.prototype 的原型是什么呢？
  // 也就是说：Object.prototype 没有原型。
  console.log('Object.prototype 的原型 =>', Object.prototype.__proto__, '=> null 代表没有原型') // null 

  // ! 继承？
  // Javascript 中的继承就是通过 __proto__ 属性实现的。
  // JavaScript 继承不会复制对象属性，相反 JavaScript 通过两个对象的关联实现委托访问。

})()
