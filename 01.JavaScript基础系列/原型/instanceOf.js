// 测试用例
function C() {}
function D() {}

console.log('------ instanceof-----')
var o = new C()

console.log('o instanceof C ==>', o instanceof C)
console.log('o instanceof D ==>', o instanceof D)


// 一层层查找 __proto__，判断是否和 Constructor.prototype 相等。
function instance_of(L, R) {
  const O = R.prototype
  L = L.__proto__
  while(true) {
    if (L === null) return false
    if (O === L) return true
    L = L.__proto__
  }
}

console.log('o instance_of C', instance_of(o, C)) // lq-log
console.log('o instance_of D', instance_of(o, D)) // lq-log