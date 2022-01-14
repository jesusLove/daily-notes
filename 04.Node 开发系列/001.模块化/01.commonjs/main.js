// ! 几个问题？
// * CJS 的实现原理？
// ? 对象引用共享，main.js 中的 bar 和 module.exports 执行同一内存地址。
// ? 内存地址所在的数据改变：main 和 module 都会改变
// * exports 和 module.exports 之间的关系？
// ? 默认情况下，exports 和 module.exports 指向相同的内存地址
// ? 如果对 module.exports 直接赋值会导致两者指向不同的对象。断开关联
// ? exports 是 commonjs 规范中定义的的；module.exports 是 Node 中具体的实现。
// ? 每个 JS 文件在 Node 中都是一个 Module 类实例，所以都有一个 module 对象。

// * CJS 是如何解决循环导入的？
// ? module 内部有缓存
// ? module 对象中 loaded 属性，用来标识是否加载过。

// * require 实现原理，如何进行模块查找的？ require(X)
// ? 1. 判断 X 是否为内置模块，例如 fs。如果是返回，停止查找。
// ? 2. 如果 X 是以 `./` 或 ../ 或 / 根路径开头。
// ? 2.1 查找指定路径的中的 X 文件，配置逻辑名为 X 文件 -> X.js -> X.json -> X.node
// ? 2.2 如果没有，查找名为 X 文件夹匹配里面的 index.js -> index.json -> index.node
// ? 3. 如果不是内置模块。则遍历 module.paths 数组查找每一级 node_modules 文件夹。

const bar = require('./bar')

console.log(bar.age)
console.log(bar.address)
bar.sayHello('Lee')
