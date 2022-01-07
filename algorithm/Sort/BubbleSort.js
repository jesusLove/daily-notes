function bubbleSort (items = []) {
  const length = items.length
  if (length <= 1) return
  for (let i = 0; i < length; ++i) {
    // 提前退出冒泡循环
    let flag = false
    for (let j = 0; j < length - i - 1; ++j) {
      if (items[j] > items[j + 1]) { // 交换数据
        const temp = items[j]
        items[j] = items[j + 1]
        items[j + 1] = temp
        flag = true // 标识有数据交换
      }
    }
    if (!flag) break // 没有数据交换，提前退出
  }
}

const a = Array(20000).fill(1).map(v => Math.floor(Math.random() * 100000) + 1)
console.time('time')
bubbleSort(a)
console.timeEnd('time')
console.log('aaaa', a)