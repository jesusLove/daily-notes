function isObject(obj) {
  return typeof obj === 'object' && obj != null
}
function deepCopy(source, hash=new WeakMap()) {
  // 判空
  if(!isObject(source)) return source
  // 处理循环引用
  if (hash.has(source)) return hash.get(source)
  // 处理数组
  const target = Array.isArray(source) ? [] : {}
  hash.set(source, target)

  // 处理 Symbol
  const symKeys = Object.getOwnPropertySymbols(source)
  if (symKeys.length) {
    symKeys.forEach(symKey => {
      if (isObject(source[symKey])) {
        target[symKey] = deepCopy(source[symKey], hash)
      } else {
        target[symKey] = source[symKey]
      }
    })
  }
  // 其他属性
  for(const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepCopy(source[key], hash)
      } else {
        target[key] = source[key]
      }
    }
  }

  // 使用 Reflect.ownKeys 处理属性（包含 Symbol 属性）
  // Reflect.ownKeys(source).forEach(key => {
  //   if (isObject(source[key])) {
  //     target[key] = deepCopy(source[key], hash)
  //   } else {
  //     target[key] = source[key]
  //   }
  // })

  return target
}

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
var sym1 = Symbol('a')
var sym2 = Symbol.for('b')
a[sym1] = 'localSymbol'
a[sym2] = 'globalSymbol'

var b = deepCopy(a)
console.log('b', b) // lq-log