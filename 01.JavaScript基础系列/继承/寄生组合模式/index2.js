// 寄生式组合继承

function Animal(name) {
  this.name = name
  this.colors = ['red', 'blue']
}

Animal.prototype.sayName = function() {
  console.log(this.name)
}

function Dog(name, age) {
  Animal.call(this, name) // 第二次调用 Animal()
  this.age = age
}
// 组合继承
// 问题：通过调用父类构造函数设置子类原型，导致子类原型中会有 Animal 实例属性。
// Dog.prototype = new Animal() // 第一次调用 Animal()
// Dog.prototype.constructor = Dog

// Object.create 模拟实现
function createObj(o) {
  function F() {}
  F.prototype = o
  return new F()
}
// 寄生式组合继承
function inheritPrototype(child, parent) {
  // 获取父类原型的副本
  
  // const prototype = Object.create(parent.prototype)
  const prototype = createObj(parent.prototype)
  // 重置 constructor，解决重写导致默认 constructor 丢失问题。
  prototype.constructor = child
  // 将父类原型副本赋值给子类原型。
  child.prototype = prototype
}

inheritPrototype(Dog, Animal)

Dog.prototype.sayAge = function () {
  console.log(this.age)
}

const dog = new Dog('lee', 2)
console.log(dog)