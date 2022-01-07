// 题目：给定一个头结点为 head 的非空单链表，返回链表的中间结点。如果有两个中间结点，则返回第二个中间结点。
// [1,2,3,4,5] => 3
// [1,2,3,4,5,6] => 4

// 快慢指针
// 思路：两个指针，快指针一次走两步、慢指针一次走一步。快指针到达末尾时，慢指针在中间。

var middleNode = function (head) {
  if (head === null || head.next === null) return head
  // 1. 定义快慢指针
  let slow = head, fast = head
  // 2. 快指针到达末尾
  while (fast != null && fast.next != null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

// 数组
// 时间复杂度 O(n)
// 空间复杂度 O(n)
var middleNode2 = function (head) {
  let a = [head]
  while (a[a.length - 1].next != null) {
    a.push(a[a.length - 1].next)
  }
  return a[Math.trunc(a.length / 2)]
}

// 单指针
// 思路：遍历两次
// 时间复杂度：O(n)
// 空间复杂度：O(1)

var middleNode3 = function (head) {
  let n = 0, cur = head
  while (cur != null) {
    n++
    cur = cur.next
  }
  let k = 0
  cur = head
  while (k < Math.trunc(n / 2)) {
    k++
    cur = cur.next
  }
  return cur
}