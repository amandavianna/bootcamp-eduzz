//Spread Operator - pega todos os itens de um array e transforma em parâmetros para uma função
//Pode ser utilizado em: strings, arrays, literal objects (para consumir em outros objetos literais) e objetos interaveis

const multiply = (...args) =>  args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) => {
  //return multiply.apply(undefined, rest) // Old-school JS

  return multiply(...rest)
}

console.log(sum(5, 5, 5, 2, 3)) //750

//String
const str = 'Amanda'
function LogArgs(...args) {
  console.log(args) //[ 'Amanda' ]
}

LogArgs(str)

function LogArgs1(...args) {
  console.log(args) //[ 'A', 'm', 'a', 'n', 'd', 'a' ]
}

LogArgs1(...str)

//Array
const arr = [1, 2, 3]

function logArgs2(a, b, c) {
  console.log(`a - ${a}`) //a - 1
  console.log(`b - ${b}`) //b - 2
  console.log(`c - ${c}`) //c - 3
}

logArgs2(...arr)

//Concatenar arrays
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

console.log(arr1.concat(arr2)) //[ 1, 2, 3, 4, 5, 6 ]
console.log([...arr1, ...arr2, 7, 8, 9]) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//Objetos literais
//Só pode ser utilizado para construir novos objetos
const obj1 = {
  test: 123
}

const obj2 = {
  ...obj1,
  test: 456,
  test2: 'hello'
}

console.log(objMerged) //{ test: 456, test2: 'hello' }
