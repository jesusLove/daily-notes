// 实例
const net = require('net')

const server = net.createServer()

server.on('connection', con => {
  console.log('-------con', con)
})

server.listen(9001)

// listening 事件在 listen 之后绑定
server.on('listening', () => {
  console.log('----listening')
})