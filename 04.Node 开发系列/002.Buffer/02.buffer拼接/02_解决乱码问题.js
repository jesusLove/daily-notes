const fs = require('fs')

const res = fs.createReadStream('./test.md', { highWaterMark: 11 })
res.setEncoding('utf8')
let data = ''
res.on('data', (chunk) => {
  data += chunk
  console.log('---chunk => ', chunk)
})
res.on('end', () => {
  console.log('-----data', data)
})
