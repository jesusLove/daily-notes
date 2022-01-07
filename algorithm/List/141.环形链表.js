// 检查链表中是否有环



/**
 * 方法一：哈希表法
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function (head) {
  if (head === null || head.next === null) return false
  const cache = new Set()
  while (head) {
    if (cache.has(head)) {
      return true
    }
    cache.add(head)
    head = head.next
  }
  return false
};

// 时间复杂度：O(n)
// 空间复杂度：O(n)

/**
 * 方法二：快慢指针法
 * 思路：快慢指针又称龟兔赛跑算法。龟兔在链表中移动，兔子跑的快，乌龟跑的慢。
 * 没有环时兔子一直在乌龟前面；有环时，在某一时刻乌龟和兔子会相遇。
 */

var hasCycle2 = function (head) {
  if (head === null || head.next === null) return false
  // 快慢指针
  let slow = head, fast = head.next
  while (slow != fast) {
    if (fast === null || fast.next === null) return false
    slow = slow.next // 前进一步
    fast = fast.next.next // 前进两步
  }
  return true
}

// 时间复杂度： O(n)
// 空间复杂度：O(1)