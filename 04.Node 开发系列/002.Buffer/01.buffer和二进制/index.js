// ! Buffer 诞生
// 由于应用场景不同，在Node中，应用需要处理网络协议、操作数据库、处理图片、接收上传文件等，
// 在网络流和文件的操作中，还要处理大量二进制数据，
// JavaScript自有的字符串远远不能满足这些需求，于是Buffer对象应运而生。

// ? 一、Buffer 结构：像 Array 对象，主要用于操作字节。

// 模块结构：JavaScript 和 C++ 结合实现，性能相关部分使用 C++，非性能部分使用 JavaScript。
const { Buffer } = require('buffer')
const str = '你好Buffer'
const buf = Buffer.from(str, 'utf-8')
console.log('buf 的 utf-8 编码结果 => ', buf)

// ? 二、Buffer 转换
console.log('buf 的 utf-8 解码结果 =>', buf.toString())
console.log(
  'buf 的 utf16le 解码结果 =>',
  buf.toString('utf16le'),
  '<= 结果是乱码'
)

// 检验编码是否支持

console.log('Buffer 是否支持 utf-8 =>', Buffer.isEncoding('utf-8'))
console.log('Buffer 是否支持 hex =>', Buffer.isEncoding('hex'))
console.log('Buffer 是否支持 utf32 =>', Buffer.isEncoding('utf32'))

// ? 三、Buffer 的拼接
