const a = {
  name: 'lee',
  book: {
    name: 'JS',
    price: 100
  },
  v1: undefined,
  v2: null,
  v3: Symbol('v3'),
  v4: [],
  v5: {}
}
function isObject(obj) {
  return typeof obj === 'object' && obj != null
}
function deepCopy(source, hash = new WeakMap()) {
  // 验证：非对象 或者 Null 直接返回
  if (!isObject(source)) return source
  // 使用 WeakMap 解决循环引用，使用过的存放在 WeakMap 中
  if (hash.has(source)) return hash.get(source)

  const target = Array.isArray(source) ? [] : {}
  // 缓存
  hash.set(source, target)

  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepCopy(source[key], hash)
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

// a.a = a
// const b = deepCopy(a)
// b.book.price = 90
// console.log(b)
// console.log(a)

// 1. 使用 Object.getOwnPropertySymbols(...) 获取 Symbol 属性数组
function deepCopy2(source, hash = new WeakMap()) {
  if (!isObject(source)) return source

  if (hash.has(source)) return hash.get(source)

  const target = Array.isArray(source) ? [] : {}

  hash.set(source, target)

  // 处理 Symbol
  const symKeys = Object.getOwnPropertySymbols(source)

  if (symKeys.length) {
    symKeys.forEach(symKey => {
      if (isObject(source[symKey])) {
        target[symKey] = deepCopy2(source[symKey], hash)
      } else {
        target[symKey] = source[symKey]
      }
    })
  }
  // 处理正常情况
  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepCopy2(source[key], hash)
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

// 2. 使用 Reflect.ownKeys 处理 Symbol 属性
function deepCopy22(source, hash = new WeakMap()) {
  
  if (!isObject(source)) return source
  if (hash.has(source)) return hash.get(source)

  const target = Array.isArray(source) ? [] : {}

  hash.set(source, target)

  Reflect.ownKeys(source).forEach(key => {
    if (isObject(source[key])) {
      target[key] = deepCopy22(source[key], hash)
    } else {
      target[key] = source[key]
    }
  })
  return target
}

var sym1 = Symbol('a')
var sym2 = Symbol.for('b')
a[sym1] = 'localSymbol'
a[sym2] = 'globalSymbol'

console.log('----------测试方法一---------')
var b = deepCopy2(a)
console.log(b)

console.log('-------测试方法二-------')
var bb = deepCopy22(a)
console.log(bb)

// 解决递归爆栈
function deepCopy3(source) {
  if (!isObject(source)) return source

  const root = {}

  const queue = [
    {
      parent: root,
      key: undefined,
      source
    }
  ]

  while (queue.length) {
    // 广度优先
    const node = queue.pop()
    const { parent, key, source } = node
    let res = parent
    if (typeof key !== 'undefined') {
      res = parent[key] = Array.isArray(source) ? [] : {}
    }
    Reflect.ownKeys(source).forEach(key => {
      if (isObject(source[key])) {
        queue.push({
          parent: res,
          key,
          source: source[key]
        })
      } else {
        res[key] = source[key]
      }
    })
  }
  return root
}
console.log('-------测试方法三-------')
var bbb = deepCopy3(a)
console.log(bbb)

