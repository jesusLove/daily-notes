// ! process.nextTick() 
// !! 从技术上讲不是事件循环的一部分。
// !! 相反，它都将在当前操作完成后处理 nextTickQueue， 而不管事件循环的当前阶段如何
// 任何时候给定的阶段中调用 process.nextTick() 的回调将在事件循环继续之前解析。
// 如果 process.nextTick() 中有递归调用会导致 “饿死” IO，阻止事件循环到达轮询阶段。


let bar
function  someAsyncApiCall(callback) {
  // callback 是同步执行的
  // callback()

  // !通过将回调置于 process.nextTick() 中，脚本仍具有运行完成的能力，允许在调用回调之前初始化所有的变量、函数等。
  // ! 它还具有不让事件循环继续的优点，适用于让事件循环继续之前，警告用户发生错误的情况
  process.nextTick(callback)
}

someAsyncApiCall(() => {
  console.log('bar', bar)
})

bar = 1

// ! process.nextTick vs setImmediate 
// * process.nextTick 在同一个阶段立即执行
// * setImmediate 在事件循环的接下来的迭代或者 Tick 上触发。
// * process.nextTick 在 setImmediate 之前执行。

