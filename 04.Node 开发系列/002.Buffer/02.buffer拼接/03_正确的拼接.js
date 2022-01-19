// Buffer.concat 函数
const fs = require('fs')
const { Buffer } = require('buffer')

const rs = fs.createReadStream('./test.md', {
  highWaterMark: 11
})
const chunks = []
let size = 0
rs.on('data', (chunk) => {
  chunks.push(chunk)
  size += chunk.length
})
rs.on('end', () => {
  const buf = Buffer.concat(chunks, size)
  console.log('合并后的 buf 数据 => ', buf.toString())
})
