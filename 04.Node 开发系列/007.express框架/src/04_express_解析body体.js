const express = require('express')

const app = express()

// 1. 默认情况下 request 对象中不存在 body 属性。
// ! 使用中间件 body-parser 解析请求数据
// ! 在 4.16.0 开始被内置到 express 中，
// ! 使用方法如下：
// 1.解析 type 为 application/json 
app.use(express.json()) 
// 2.解析 type 为 application/x-www-form-urlencoded 
app.use(express.urlencoded())

// => login 可以接受到 body
app.post('/login', (req, res) => {
  console.log('请求体 =>', req.body)
  res.send(req.body)
})

app.listen(8080, () => {
  console.log('服务启动了')
})
