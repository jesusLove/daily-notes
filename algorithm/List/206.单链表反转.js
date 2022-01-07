

// 206 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 结点定义
// function ListNode (val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : val)
// }


// 迭代法
// 思路：
const reverseList = function (head) {
  let prev = null, cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

// 递归法
const reverseList2 = function (head) {
  if (head === null || head.next === null) return head;
  const newHead = reverseList2(head.next)
  head.next.next = head
  head.next = null
  return newHead
}

//  1 -> 2 -> 3 <- 4 <- 5
// head 指向 3，此时 head.next.next = head 完成后，1 -> 2 <- 3 <- 4 <- 5

