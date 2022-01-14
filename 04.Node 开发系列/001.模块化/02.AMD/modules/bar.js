define(function (require, factory) {
  const name = 'lee'
  function sayHello(name) {
    console.log('Hello ' + name)
  }
  return {
    name,
    sayHello
  }
})
