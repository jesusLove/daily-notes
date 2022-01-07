function mergeSort (lists = []) {
  mergeSortC(lists, 0, length - 1)
}
function mergeSortC (lists, p, r) {
  if (p >= r) return
  q = Math.floor((p + r) / 2)
  mergeSortC(lists, p, q)
  mergeSortC(lists, q + 1, r)

}
function merge () { }