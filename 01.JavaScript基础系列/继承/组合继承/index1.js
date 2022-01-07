// 组合继承

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
Dog.prototype = new Animal() // 第一次调用 Animal()
Dog.prototype.constructor = Dog

Dog.prototype.sayAge = function () {
  console.log(this.age)
}

const dog = new Dog('lee', 1)
console.log(dog)