const lib = require('./lib')

console.log('area = ', lib.area(10))
console.log('circumference = ', lib.circumference(10))


const Square = require('./square')

const mySquare = new Square(10)

console.log('mySquare area = ', mySquare.area())