async function async1(){
  console.log('async1 begin')
  await async2()
  console.log('async1 end')
}
async function  async2() {
  console.log('async 2')
}
setTimeout(() => {
  console.log('time 1 begin')
  new Promise(resolve => {
    resolve()
  }).then(() => {
    // p1 和 p2 不是在同一个微任务队列，在 time1end 之后执行
    console.log('p1')
  })
  console.log('time 1 end')
}, 0);

async1()

setTimeout(() => {
  console.log('time 2')
}, 300);

setImmediate(() => {
  console.log('m1')
})
new Promise((resolve) => {
  resolve()
}).then(() => {
  console.log('p2')
})

process.nextTick(() => {
  console.log('tick1')
})

setImmediate(() => {
  console.log('m2')
})