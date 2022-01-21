const express = require('express')

const app = express()

// 路由方法中间件
// 1. GET 请求
app.get('/', (req, res, next) => {
  res.send('Hello world')
})

// 2. POST 请求
app.post('/login', (req, res, next) => {
  res.send('login post')
})

// 3. 另外还有 Delete、Put 等方法。

app.listen(8080, ()=> {
  console.log('server success')
})