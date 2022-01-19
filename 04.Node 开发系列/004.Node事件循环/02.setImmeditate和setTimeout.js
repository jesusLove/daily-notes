// ! setImmediate vs setTimeout 
// 1. setImmediate 轮询 阶段完成，执行脚本
// 2. setTimeout 最小阈值过后运行脚本。
// 3. 如果在 IO 周期内被调用，setImmediate 会在任何定时器之前执行，和有多少定时器无关。

// setTimeout(() => {
//   console.log('timeout')
// }, 0)
// setImmediate(() => {
//   console.log('immediate')
// })

console.log('-------------------IO---------------')
const fs = require('fs')

// 该示例中，immediate 永远在 timeout 之前回调
fs.readFile('./test.md', (er, data) => {
  setTimeout(() => {
    console.log('timeout')
  }, 0)
  setImmediate(() => {
    console.log('immediate')
  })
})