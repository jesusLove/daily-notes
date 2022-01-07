/**
 * 1、可以指定this
 * 2、返回一个函数
 * 3、可以传入参数
 * 4、柯里化
 * 5、绑定函数可以通过 new 操作创建对象：吧原对象当成构造器，提供的 this 被忽略。
 */
Function.prototype.bind1 = function(context) {
    // 调用者必须为 function
    if (typeof this != 'function') {
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable"')
    }
    // 指向调用者
    var self = this
    // 取参数，定义个参数为指定的 this
    var args = Array.prototype.slice.call(arguments, 1)

    var fNOP = function() {}
    // 返回一个函数
    var fBound = function() {
        var bindArgs = Array.prototype.slice.call(arguments)
        // 指定 this
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
    }
    // 解决 this.prototype 被修改的问题
    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()
    return fBound
}

