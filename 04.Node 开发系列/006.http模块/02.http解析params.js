const http = require('http')

const server = http.createServer((req, res) => {
  // 解析参数
  const params = new URL(req.url, `http://${req.headers.host}`)
  console.log('params =>', params)
  console.log(
    'params 参数 => ',
    params.searchParams.get('username'),
    params.searchParams.get('password')
  )
  res.end('哈哈哈')
})

server.listen(8080, () => {
  console.log('服务启动')
})
