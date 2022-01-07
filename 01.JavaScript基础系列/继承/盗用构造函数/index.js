function Animal() {
  this.name = 'huahua'
  this.colors = ['red', 'blue', 'green']
}
Animal.prototype.sayName = function(){
  console.log(this.name)
}
function Dog() {
  Animal.call(this)
  this.age = 1
}
// 继承 Animal
Dog.prototype = new Animal()
Dog.prototype.getAge = function() {
  console.log(this.age)
}
const dog = new Dog()
dog.sayName()
// 参考图：Dog继承

