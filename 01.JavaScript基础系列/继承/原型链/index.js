function Animal() {
  this.name = 'huahua'
  this.colors = ['red', 'blue', 'green']
}
Animal.prototype.sayName = function(){
  console.log(this.name)
}
function Dog() {
  this.age = 1
}
// 继承 Animal
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

Dog.prototype.getAge = function() {
  console.log(this.age)
}
const dog = new Dog()
dog.sayName()
// 参考图：Dog继承

// 缺点：
// 1. 引用类型，在实例中被共享; 
// 2. 无法向父类传值

