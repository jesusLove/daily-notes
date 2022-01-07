// 已排序区间、未排序区间
// 从未排序区间选一个插入到已排序区间中。
function insertionSort (items = []) {
  const length = items.length
  if (length <= 0) return
  for (let i = 1; i < length; ++i) {
    const val = items[i]
    let j = i - 1
    // 查找插入位置
    for (; j >= 0; --j) {
      if (items[j] > val) {
        items[j + 1] = items[j] // 数据移动
      } else {
        break
      }
    }
    items[j + 1] = val // 插入数据
  }
}
// [4,5,6,1,3,2]

const a = Array(20000).fill(1).map(v => Math.floor(Math.random() * 100000) + 1)
// const a = [4, 5, 6, 1, 3, 2]
console.time('time')
insertionSort(a)
console.timeEnd('time')
console.log('aaaa', a)