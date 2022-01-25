const express = require('express')

// 几个问题
// 1. express() 做了什么事？
//  * 创建 app 函数，并且在 app 上挂载属性和方法。（app 定义的方法在 application 函数，例如 use、listen）
// 2. app.use 内部是如何实现的？
//  * 基于 Router 对象
// 3. 中间件是如何调用的?

// app 是一个函数
// 函数也是对象：上面绑定一些属性。
const app = express()

// 内部创建了一个 Router 对象
app.use((req, res, next) => {
  console.log('哈哈哈')
})

// listen 内部
// 1. 调用 http.createServer 创建 server，参数是 app 函数。
// 2. 调用 server.listen 函数
app.listen(8080, () => {
  console.log('启动服务')
})
