// ! 两种方法：迭代法、递归法
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// ? 迭代法
// 哨兵结点
// 时间复杂度：O(n + m)
// 空间复杂度：O(1)
var mergeTwoLists = function (l1, l2) {
  const preHead = new ListNode(-1) // 哨兵结点
  let prev = preHead
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 === null ? l2 : l1
  return preHead.next;
}


// ? 递归法
// 时间复杂度：O(n + m) 
// 空间复杂度：O(n + m)
var mergeTwoLists2 = function (l1, l2) {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists2(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists2(l1, l2.next)
    return l2
  }
}
