function inheritPrototype(subType, superType) {
  const prototype = Object.create(superType.prototype) // 父类原型的一个副本
  prototype.constructor = subType // 增强对象，弥补重新原型而导致 constructor 的丢失  
  subType.prototype = prototype
}
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'green']
}
SuperType.prototype.sayName = function() {
  console.log(this.name)
}

// 借用构造函数增强子类实例属性
function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

// 子类原型执行父类
inheritPrototype(SubType, SuperType)

SubType.prototype.sayAge = function() {
  console.log(this.age)
}

const instance1 = new SubType('lee', 20)
const instance2 = new SubType('qq', 22)

instance1.colors.push('blue')
instance2.colors.push('yellow')

console.log(instance1)
console.log(instance2)
