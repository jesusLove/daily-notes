function Person(name, age,job) {
  this.name = name 
  this.age = age
  this.job = job
  this.sayName = function() {
    console.log(this.name)
  }
}

const p1 = new Person('lee', 20, 'Software Engineer')
console.log(p1)
const p2 = new Person('lee', 20, 'Doctor')
console.log(p1.sayName === p2.sayName) // false

// 构造函数 VS 工厂模式
/**
 * 1. 没有显示创建对象
 * 2. 显示使用 this
 * 3. 没有 return 语句
 * 4. 使用 new 操作符
 */

 // new 操作的过程
 /**
  * 1. 创建新对象
  * 2. 新对象内部 __proto__ 指向构造函数的 prototype 属性
  * 3. 执行构造函数，并将 this 指向新对象，给新对象添加属性。
  * 4. 构造函数返回非空对象，则返回该对象。否则，返回创建的新对象。
  */
function objectFactory() {
  var obj = new Object(), Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  var ret = Constructor.apply(obj, arguments)
  return typeof ret === 'object' ? ret : obj
}

const p3 = objectFactory(Person, 'zee', 22, 'Sofeware Engineer')
console.log(p3)

