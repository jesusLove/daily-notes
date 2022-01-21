const express = require('express')

const app = express()

// 普通中间件
// 回调函数三个参数：
// 1. request 请求参数
// 2. response 响应参数
// 3. 中间件的回调参数，继续执行下一个中间件

// 1. 一个 use 可以定义多个中间件。
app.use((req, res, next) => {
  console.log('middleware 1')
  // 执行下一个中间件
  next()
}, (req, res, next) => {
  console.log('middleware 2')
  next()
})

// 2. 定义的中间件有调用顺序
app.use((req, res, next) => {
  console.log('middleware 3')
  next()
})



// 监听 8080 端口
app.listen(8080, () => {
  console.log('服务启动成功')
})

// !调用顺序和编写的顺序有关