class Point {

}
console.log(typeof Point) // funtion 
console.log(Point === Point.prototype.constructor) // true 

/**
 * class 语法糖
 * 1. 类本身是函数，执行构造函数
 * 2. 类中定义的方法，实际定义在 prototype 上，不可以枚举。
 * 3. 必须存在 constructor 方法，没有会默认添加个空的。构造函数可以返回对象，替换 this。
 * 4. 
 */