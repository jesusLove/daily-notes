const http = require('http')

const server = http.createServer((req, res) => {
  // console.log('请求体 =>', req)
  // 接收请求数据
  req.on('data', (data) => {
    // const body = JSON.stringify(data.toString())
    // console.log('body', body)
    // console.log('request 数据 => ', data.toString())
    res.end(data)
  })
})

server.listen(8080)
