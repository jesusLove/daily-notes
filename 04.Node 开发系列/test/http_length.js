const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html;charset=utf8')
    // res.setHeader('Content-Length', 10)
    res.setHeader('Transfer-Encoding', 'chunked')
    res.write('<p>第一行</p>')
    setTimeout(() => {
      res.write('第二次数据 <br/>')
    }, 1000)
    setTimeout(() => {
      res.write('第三次数据')
      res.end()
    }, 2000)
  }
})

server.listen('9001', () => {
  console.log('启动成功 http://localhost:9001')
})