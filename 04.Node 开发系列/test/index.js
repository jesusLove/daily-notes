const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html; charset=UTF-8')
  res.end('你好世界')
})

server.listen(3010, () => {
  console.log('runing http://localhost:3010/')
})