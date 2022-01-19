# Buffer

### Buffer 底层是 Uint8Array 类的子类，具有数组的特性。

```js
const buf = Buffer.from('')
// 底层会创建 FastBuffer 类对象，类的定义如下：
class FastBuffer extends Uint8Array {
  // ...
}
```

### Buffer 默认大小为 `Buffer.poolSize = 8 * 1024;` 即 8kb。

### 创建 Buffer 大小问题

```js
const buf = Buffer.from('你好，Buffer')

// 会调用一下内容
function fromStringFast(string, ops) {
  // 字段长度
  const length = ops.byteLength(string)
  // length 大于等于 4kb
  if (length >= Buffer.poolSize >>> 1)
    return createFromString(string, ops.encodingVal)

  if (length > poolSize - poolOffset) createPool()
  let b = new FastBuffer(allocPool, poolOffset, length)
  const actual = ops.write(b, string, 0, length)
  if (actual !== length) {
    // byteLength() may overestimate. That's a rare case, though.
    b = new FastBuffer(allocPool, poolOffset, actual)
  }
  poolOffset += actual
  alignPool()
  return b
}
```
