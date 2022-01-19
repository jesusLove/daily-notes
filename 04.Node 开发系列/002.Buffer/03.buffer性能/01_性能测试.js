const http = require('http')
const { Buffer } = require('buffer')

let str = ''

for (let i = 0; i < 1024 * 10; i++) {
  str += 'a'
}

str = Buffer.from(str)

http
  .createServer((req, res) => {
    res.writeHead(200)
    res.end(str)
  })
  .listen(8900)

// ab -c 200 -t 100 http://127.0.0.1:8900/
