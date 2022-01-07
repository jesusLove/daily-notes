function Person() {}
// 属性和方法添加在 Person.prototype 属性，构造函数中什么也没有。
Person.prototype.name = 'lee'
Person.prototype.age = 20
Person.prototype.job = 'Software Engineer'
Person.prototype.sayName = function() {
  console.log(this.name)
}

const p1 = new Person()
console.log(p1.name) // lee

const p2 = new Person()
console.log(p2.name) // lee

// p1 和 p2 都是共享原型上的属性和方法。
console.log(p1.sayName === p2.sayName) 


// 原型模式特点：共享原型上的属性和方法。
// 这即使原型的优点也是其缺点。

Person.prototype.firends = ['zhang', 'wang']
p1.firends.push('zhao')
console.log(p1.firends) // ["zhang", "wang", "zhao"]
console.log(p2.firends) // ["zhang", "wang", "zhao"]

