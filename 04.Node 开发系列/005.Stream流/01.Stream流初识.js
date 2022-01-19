// ! stream 模块提供了流相关接口 API

// 流是可读写的，所有的流都是 EventEmitter 的实例
// EE 构造函数，用来创建 EventEmitter 实例。
/**
 * 
 * 寄生组合继承
const EE = require('events');
function Stream(opts) {
  EE.call(this, opts);
}
ObjectSetPrototypeOf(Stream.prototype, EE.prototype);
ObjectSetPrototypeOf(Stream, EE);
*/

// ! Stream 类型：
// 1. Writable
// 2. Readable
// 3. Duplex
// 4. Transform

// ! 所有的流支持的类型：字符串、Buffer（Uint8Array） 对象。

// ! Writable 和 Readable 流将数据存储在内部的缓冲区中。
// ? 通过 highWaterMark 选项设置缓冲区大小，指定字节总数。

// ! 可写流

// Writable 流示例：
// 1. 客户端 HTTP 请求
// 2. 服务端 HTTP 响应
// 3. 文件系统写入流
// 4. 压缩流
// 5. 加密流
// 6. TCP 套接字
// 7. 子进程标准输入
// 8. process.stdout 、process.stderr

// ! 可读流
