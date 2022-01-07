function debounce1 (fn, wait = 50, immediate) {
  // 定时器 ID 
  let timer = null
  // 返回闭包
  return function (...args) {
    // 清空定时器
    if (timer) clearTimeout(timer)

    // 第一次触发立即执行
    // timer 为空首次触发
    if (immediate && !timer) {
      fn.apply(this, args)
    }

    // 设置新的定时器，定时器结束后执行函数
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

/**
 * 时间戳方式
 */
const throttle = (fn, wait = 50, immediate) => {
  // 上次 fn 执行时间
  let previous = 0
  return function (...args) {
    // 获取当前时间戳，单位毫秒
    let now = +new Date()
    if (now - previous > wait) {
      previous = wait
      fn.apply(this, args)
    }
  }
}
// 加强版的节流: 在上面的基础是引入 debounce，用于小于 wait 时间间隔部分
const throttle2 = (fu, wait) => {
  let previous = 0, timer = null
  return function (...args) {
    let now = +new Date()
    // 小于 wait 时间
    if (now - previous < wait) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        previous = wait
        fn.apply(this, args)
      }, wait);
    } else {
      // 大于 wait 时间
      previous = wait
      fn.apply(this, args)
    }
  }
}


// ? underscore 防抖实现
_.debounce = (func, wait, immediate) => {
  // timeout 定时器；result 执行返回值
  let timeout, result
  // 定时器计时结束后
  const later = function (context, args) {
    timeout = null
    // if (args) 判断是为了过滤立即触发的
    // 关联在于 _.delay 和 restArguments
    if (args) result = func.apply(context, args)
  }
  // 将 debounce 处理结果当做函数返回值
  const debounced = (args) => {
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 首次触发设置 timeout
      const callNow = !timeout
      timeout = setTimeout(later, wait);
      if (callNow) result = apply(this, args)
    } else {
      timeout = _.delay(later, wait, this, args)
    }
    return result
  }
  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }
}
_.delay = (func, wait, args) => {
  return setTimeout(() => {
    return func.apply(null, args)
  }, wait);
}



// ! 测试


const betterFn = debounce1(() => console.log('Fn 防抖执行'), 1000)

// 背景：防抖场景在某一端时间内，无论触发多少次，都只执行最后一次。

