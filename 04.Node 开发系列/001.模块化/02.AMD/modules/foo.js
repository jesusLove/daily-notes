define(function (require, factory) {
  const name = 'foo'
  function sayHello(name) {
    console.log('Hello ' + name)
  }
  return {
    name,
    sayHello
  }
})
