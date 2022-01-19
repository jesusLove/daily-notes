const fs = require('fs')

const res = fs.createReadStream('./test.md')

let data = ''
res.on('data', (chunk) => {
  // 默认情况下是 Buffer 对象
  data += chunk
})
res.on('end', () => {
  // 乱码原因：一个汉字三个字节，限制 11 个字节会导致最后的汉字只有两个字节。
  console.log('-----data', data)
})

// 解决方法: 设置编码方式 utf8
