// 例子
// ! 有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，请问走这 n 个台阶有多少种走法？

// 分析：
// ? 根据第一步的走法所有走法分为两类，第一类第一步走了 1 个台阶，另一类第一步走了 2个台阶。
// ? 所以 n 个台阶的走法等于走 1 阶后，n - 1 个台阶的走法，
// ? 加上先走 2 阶后，n - 2 个台阶的走法。
// ? 公式表示就是：f(n) = f(n - 1) + f(n - 2)
// ? 终止添加 f(1) = 1 f(2) = 2
function f (n) {
  if (n === 1) return 1
  if (n === 2) return 2
  return f(n - 1) + f(n - 2)
}
console.log('----- f(3)', f(3))
console.log('----- f(6)', f(6))

// ! 堆栈溢出问题

// ! 重复计算的问题，例如：计算 f(5) 需要 f(3)，而计算 f(4) 也需要 f(3)，为了避免重复计算 f(3)
// ! 使用 map 缓存已经计算过的 f(n)，下次直接使用即可。
function f2 (n, cache = new Map()) {
  if (n == 1) return 1
  if (n === 2) return 2

  if (cache.has(n)) {
    return cache.get(n)
  }
  const ret = f2(n - 1, cache) + f2(n - 2, cache)
  cache.set(n, ret)
  return ret
}

console.log('----- f(6)', f2(6))

// ! 如何将递归改为非递归？
function f3 (n) {
  if (n === 1) return 1
  if (n === 2) return 2
  let ret = 0
  let pre = 2
  let prepre = 1
  for (let i = 3; i <= n; i++) {
    ret = pre + prepre
    prepre = pre
    pre = ret
  }
  return ret
}

// 