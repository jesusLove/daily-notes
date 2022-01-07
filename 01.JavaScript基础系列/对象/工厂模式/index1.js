/*
 * @Author: LQQ liqianqian01@haier.com
 * @Date: 2020-12-15 09:08:42
 * @Last Modified by: LQQ
 * @Last Modified time: 2020-12-15 09:09:43
 */
// 工厂模式创建对象
function createPerson(name, age, job) {
  let obj = new Object()
  obj.name = name
  obj.age = age
  obj.job = job
  obj.sayName = function () {
    console.log(this.name)
  }
  return obj
}
const p1 = createPerson('lee', 20, 'Software Engineer')
console.log(p1)

const p2 = createPerson('wee', 21, 'Doctor')
console.log(p2)
// 无法识别 对象类型
