/**
 * 分析：原地排序算法。非稳定排序。
 * 最好时间复杂度：O(n)
 * 最好时间复杂度：O(n^2)
 * 平均时间复杂度：O(n ^ 2)
 */

// ! 理论算法实用性低
function selectionSort (lists = []) {
  const length = lists.length
  if (length <= 0) return
  let min, temp
  for (let i = 0; i < length; i++) {
    min = i
    // 查找最小的元素
    for (let j = i + 1; j < length; j++) {
      if (lists[min] > lists[j]) {
        min = j
      }
    }
    // 把最小的元素放在前面
    temp = lists[min]
    lists[min] = lists[i]
    lists[i] = temp
  }
}

const a = Array(20000).fill(1).map(v => Math.floor(Math.random() * 9000) + 1)
console.time('time')
selectionSort(a)
console.timeEnd('time')
console.log('aaaa', a)