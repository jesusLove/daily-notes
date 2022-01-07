// 题目：给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 进阶：进阶：你能尝试使用一趟扫描实现吗？

// 暴力解法
// !两次遍历，第一次计算长度，第二次删除
// 时间复杂度：O(n)
// 空间复杂度：O(1)
var removeNthFromEnd = function (head, n) {
  if (!head) return head
  // 1.哨兵结点，处理只有一个结点情况
  const tempHead = new ListNode(-1, head)
  let cur = tempHead
  // 2. 计算链表长度
  let sum = 0
  while (cur.next) {
    cur = cur.next
    sum++
  }
  // 3. 找到待删除结点
  cur = tempHead
  let idx = sum - n
  while (idx > 0) {
    cur = cur.next
    idx--
  }
  // 4. 删除结点
  cur.next = cur.next.next
  return tempHead.next
}

// 栈
// !思路：栈先进后出特性，一次所有结点压入栈中，弹出 n 个结点，此时栈顶就是待删除的结点的前一个结点。
// 时间复杂度：O(n)
// 空间复杂度：O(n)
var removeNthFromEnd2 = function (head, n) {
  // 1. 哨兵结点；栈
  const tempHead = new ListNode(-1, head)
  let stack = []
  let cur = tempHead
  // 2. 压栈
  while (cur) {
    stack.push(cur)
    cur = cur.next
  }
  // 3. 出栈
  while (n > 0) {
    stack.pop()
    n--
  }
  // 4. 待删除结点的前一个结点
  const prevNode = stack.pop()
  // 5. 删除结点
  prevNode.next = prevNode.next.next
  return tempHead.next
}


// 双指针
// 思路：前后指针间隔 n .
// 1. 先移动 cur 指针 n 步
// 2. 然后 同时移动 pre, cur，当 cur 为 null 时 pre 指向的是待删除结点的前一个结点
var removeNthFromEnd3 = function (head, n) {
  // 1. 哨兵结点；两个指针
  const tempHead = new ListNode(-1, head)
  let pre = tempHead, cur = tempHead.next
  // 2. 移动后一个指针，间隔为 n
  while (n > 0) {
    cur = cur.next
    n--
  }
  // 3. 同时移动两个指针，当 cur 到达末尾时，pre 指向待删除的前一个结点
  while (cur) {
    cur = cur.next
    pre = pre.next
  }
  pre.next = pre.next.next
  return tempHead.next
}