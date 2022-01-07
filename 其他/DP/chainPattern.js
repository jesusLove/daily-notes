var order500 = function(orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500定金, 100优惠券') // lq-log
  } else {
    return 'next'
  }
}
let order200 = function(orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200 定金，50优惠券') // lq-log
  } else {
    return 'next'
  }
}

let orderNormal = function(orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，无优惠券') // lq-log
  } else {
    console.log('库存不足') // lq-log
  }
}

// 包装职责链节点
const Chain = function(fn) {
  this.fn = fn
  this.successor = null
}
Chain.prototype.setNextSuccessor = function(successor) {
  return this.successor = successor
}
Chain.prototype.passRequest = function() {
  const res = this.fn.apply(this, arguments)
  if (res === 'next') {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments)
  }
  return res
}

Chain.prototype.next = function() {
  return this.successor && this.successor.passRequest.apply(this.successor, arguments)
}

// 封装责任链节点
// const chainOrder500 = new Chain(order500)
// const chainOrder200 = new Chain(order200)
// const chainOrderNormal = new Chain(orderNormal)

// // 指定节点顺序
// chainOrder500.setNextSuccessor(chainOrder200)
// chainOrder200.setNextSuccessor(chainOrderNormal)

// chainOrder500.passRequest(1, true, 500)
// chainOrder500.passRequest(2, false, 500)
// chainOrder500.passRequest(1, true, 0)

// 支持异步的责任链
const fn1 = new Chain(function() {
  console.log('fn1') // lq-log
  return 'next'
})
const fn2 = new Chain(function() {
  console.log('fn2') // lq-log
  setTimeout(() => { // 异步
    this.next()
  }, 1000);
})
const fn3 = new Chain(function() {
  console.log('fn3') // lq-log
})

fn1.setNextSuccessor(fn2).setNextSuccessor(fn3)

fn1.passRequest()

// AOP 实现责任链
Function.prototype.after = function(fn) {
  let self = this
  return function() {
    const ret = self.apply(this, arguments)
    if (ret === 'next') {
      return fn.apply(this, arguments)
    }
    return ret
  }
}
const order = order500.after(order200).after(orderNormal)
order(1, true, 500)
order(2, true, 500)
order(3, false, 500)