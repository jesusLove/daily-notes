;(() => {
  console.log('-------------- 01. 全局执行上下文的变量对象 -----------------')

  console.log('全局变量对象——全局对象')

  // 1. 通过 this 引用, 在浏览器中就是 window 对象
  console.log('全局对象 this =>', this) // window

  // 2. 全局对象是 Object 构造函数实例化的一个对象
  console.log('this instanceof Object => ', this instanceof Object)

  // 3. 预设了一些属性和函数
  console.log('全局对象预设属性和函数 Math.random() => ', Math.random())
  console.log('预设值 this.Math.random() => ', this.Math.random())
})()

// 4. 全局变量的宿主, （这里不能写在自执行函数中）
var aaaaa = 1
console.log('全局变量的宿主 => ', this.aaaaa) // undefined

// 5. 客户端 JavaScript 中， 全局对象有 window 属性执行自身
console.log('全局变量 window.a => ', window.aaaaa)
this.window.aaaaa = 2
console.log(
  '全局变量 this.a =>',
  this.aaaaa,
  '全局变量 window.a => ',
  window.aaaaa
)

// ! 全局对象
