const age = 10

let address = '哈哈'

function sayHello(name) {
  console.log('Hello ' + name)
}

exports.age = age
exports.address = address
exports.sayHello = sayHello

console.log(module)
