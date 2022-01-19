setTimeout(() => {
  console.log('timeout1')
  new Promise((resolve) => {
    resolve()
  }).then((res) => {
    console.log('promise1')
  })
}, 0)

new Promise((resolve) => {
  resolve()
}).then(() => {
  console.log('promise2')
})

process.nextTick(() => {
  console.log('tick1')
})

setImmediate(() => {
  console.log('setImmediate1')
})

setTimeout(() => {
  console.log('timeout2')
}, 0)

process.nextTick(() => {
  console.log('tick2')
})

setImmediate(() => {
  console.log('setImmediate2')
})


// tick1
// tick2
// promise2
// timeout1
// promise1
// timeout2
// setImmediate1
// setImmediate2