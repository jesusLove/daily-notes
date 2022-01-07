// 原理：某一时间间隔内只执行一次，无论函数调用多少次。
// 场景：onresize 事件、mousemove 事件、上传进度等。
// 实现方案：时间戳、定时器


// ? 时间戳
// fn 是需要执行的函数
// wait 等待时间
const throttle = (fn, wait = 50) => {
  let previous = 0
  return function (...args) {
    let now = +new Date()
    if (now - previous > wait) {
      previous = now
      fn.apply(this, args)
    }
  }
}

// ? 定时器
const throttle = (fn, wait = 50) => {
  let timer = null
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      clearTimeout(timer)
      timer = null
    }, wait);
  }
}


const betterFn = throttle(() => console.log('fn 函数执行'), 1000)

// setInterval(betterFn, 10)


// underscore 中实现方案
