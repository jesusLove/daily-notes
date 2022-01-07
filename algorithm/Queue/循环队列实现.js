class CircularQueue {
  constructor(capacity) {
    this.n = capacity
    this.items = Array(capacity)
    this.head = 0
    this.tail = 0
  }
  // 入队
  enqueue (item) {
    // 队满了
    if ((this.tail + 1) % this.n === this.head) return false
    this.items[this.tail] = item
    this.tail = (this.tail + 1) % this.n
    console.log('---tail', this.tail, this.head)
    return true
  }
  dequeue () {
    // 队空
    if (this.head === this.tail) return null
    const ret = this.items[this.head]
    this.head = (this.head + 1) % this.n;
    return ret
  }
}


const queue = new CircularQueue(5)
// 入队
queue.enqueue(7)
queue.enqueue(8)
queue.enqueue(9)
queue.enqueue(10) // 队满，只能存储四个元素。[7<head>,8,9,10, <tail>]

// 出队队列情况：[7, 8<head>, 9, 10, <tail>]
console.log(queue.dequeue(), queue.head) // 7 1
// 入队
queue.enqueue(11) // 队列情况：[7<tail>, 8<head>, 9, 10, 11]
console.log(queue.dequeue(), queue.head) // 8 2 => 队列情况：[7<tail>, 8, 9<head>, 10, 11]
queue.enqueue(12) // 入队12 队列情况：[12, 8<tail>, 9<head>, 10, 11]
console.log(queue)