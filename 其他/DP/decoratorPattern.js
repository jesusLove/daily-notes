// 装饰者模式？
// 动态给类的某个对象添加额外的职责，而不会影响其派生的对象。
// 1. 运行期间动态添加职责
// 2. 不影响其派生对象

// 传统语言装饰者：基于类实现

const T = function () {
  const Plane = function () { }

  Plane.prototype.fire = function () {
    console.log('发射普通子弹') // lq-log
  }

  const MissileDecorator = function (plane) {
    this.plane = plane
  }
  MissileDecorator.prototype.fire = function () {
    this.plane.fire()
    console.log('发射导弹') // lq-log
  }

  const AtomDecorator = function (plane) {
    this.plane = plane
  }
  AtomDecorator.prototype.fire = function () {
    this.plane.fire()
    console.log('发射原子弹') // lq-log
  }

  let plane = new Plane()
  plane = new MissileDecorator(plane)
  plane = new AtomDecorator(plane)

  plane.fire()
}()

console.log('-------------------------') // lq-log
// 装饰器也称包装器：一个对象嵌入到另一个对象中，实际上一个对象把另一个对象包装起来形成一条包装链。

// JS 是动态语言，在实现装饰器上无需使用类。
const J = function () {
  const plane = {
    fire: function () {
      console.log('发射普通子弹') // lq-log
    }
  }
  const fire1 = plane.fire // 保留原引用的方式
  plane.fire = function () {
    fire1()
    console.log('发射导弹') // lq-log
  }
  const fire2 = plane.fire
  plane.fire = function () {
    fire2()
    console.log('发射原子弹') // lq-log
  }

  plane.fire()
}()
// 保留原引用的方式修改函数。
// 缺点：
// 1. 必须维护中间变量，随着装饰链的长度的增加，中间变量的数量也会越来越多。
// 2. this 被劫持问题

// AOP 实现装饰器
// 函数之前执行
Function.prototype.before = function(beforeFn) {
  var _self = this      // 原函数的引用
  return function() {   // 返回包含新函数和原函数的代理函数
    beforeFn.apply(this, arguments) // 执行新函数，并保证 this 不被劫持，新函数的参数也被传入到原函数，新函数在原函数之前执行。
    return _self.apply(this, arguments) // 执行原函数并返回原函数的执行结果，保证 this 不被劫持。
  }
}
// 函数之后执行
Function.prototype.after = function(afterFn) {
  var _self = this
  return function() {
    var ret = _self.apply(this, arguments)
    afterFn.apply(this, arguments)
    return ret
  }
}

// AOP 数据统计上报
// 1. 用 AOP 动态更改函数的参数。

var func = function(params) {
  console.log(params) // lq-log
}

func = func.before(function (params) {
  params.b = 'b'
})

func({a: 'a'})

