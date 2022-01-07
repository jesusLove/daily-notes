function inheritPrototype(subType, superType) {
  var prototype = Object.create(subType.prototype) // 创建对象，创建父类原型的一个副本
  prototype.constructor = subType // 增强对象，弥补因重写原型而失去的默认的 constructor 属性
  subType.prototype = prototype // 执行对象，将新创建的对象赋值给子类的原型
}

// 父类初始化实例属性和原型属性
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue']
}
SuperType.prototype.sayName = function() {
  console.log(this.name)
}
// 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}
inheritPrototype(SubType, SuperType)
// 新增子类原型属性
SubType.prototype.sayAge = function() {
  console.log(this.age)
}

const instance1 = new SubType('xxx', 12)
const instance2 = new SubType('yyy', 21)
instance1.colors.push('green')
instance2.colors.push('orange')
console.log(JSON.stringify(instance1)) // lq-log
console.log(JSON.stringify(instance2)) // lq-log