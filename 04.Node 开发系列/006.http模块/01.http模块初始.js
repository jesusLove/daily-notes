const http = require('http')

const server = http.createServer((req, res) => {
  console.log('请求头 =>', JSON.stringify(req.headers))
  console.log('请求方式 =>', req.method)
  console.log('请求 url =>', req.url)
  res.end('哈哈哈')
})

server.listen(8080, () => {
  console.log('服务器启动了~')
})

// 2. 另一种创建服务方式
const server2 = new http.Server((req, res) => {
  console.log('另一种创建服务的方式')
  res.end('哈哈')
}).listen(8001)
