function object(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

var person = {
  age: 10,
  books: ['JS', 'Java']
}

var anotherPerson = object(person)
anotherPerson.age = 20
anotherPerson.books.push('Swift')

var xxxPerson = object(person)
xxxPerson.age = 30
xxxPerson.books.push('Python')

console.log(JSON.stringify(person))

/**
 * 引用类型被共享；无法传值
 */