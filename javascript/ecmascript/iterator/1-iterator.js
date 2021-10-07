//Iterator - quando sabe como acessar itens numa coleção, um por vez, enquanto mantém rastreada a posição atual em uma dada sequência.
//Em JavaScript um iterator é um objeto que oferece o método next(), o qual retorna o próximo item da sequência.
//Este método retorna um objeto com duas propriedades: done e value.

const makeIterator = (array) => {
  let nextIndex = 0

  return {
    next : () => {
      return nextIndex < array.length ?
      {value: array[nextIndex ++], done: false} :
      {done: true};
    }
  }
}

let it = makeIterator(['yo', 'ya'])
console.log(it.next().value) // 'yo'
console.log(it.next().value) // 'ya'
console.log(it.next().done)  // true

//Symbol - Uma maneira de gerar um identificador único
//O seu valor nunca vai ser igual ao outro
//Não pode ser invocado utilizando o new()

const uiqueId = Symbol('Hello')
const uiqueId2 = Symbol('Hello')

console.log(uiqueId === uiqueId2) //false

//Serve para gerar propriedades privadas
const obj = {
  [uiqueId]: 'Oiii'
}

console.log(obj)

//getOwnPropertySymbols - Para obter as propriedades de Symbols
console.log(Object.getOwnPropertySymbols(obj))

//Well Known Symbols
//O Symbol possui algumas propriedades como: iterator, split, toStringTag, toPrimitive, asyncIterator...

const arr = [1, 2, 3, 4]

//Iterator - é uma interface para consumir passo a passo uma lista, uma estrutura de dados
const it = arr[Symbol.iterator]()

// console.log(it.next()) //{ value: 1, done: false }
// console.log(it.next()) //{ value: 2, done: false }
// console.log(it.next()) //{ value: 3, done: false }
// console.log(it.next()) //{ value: 4, done: false }
// console.log(it.next()) //{ value: undefined, done: true }

for (let value of arr) {
  console.log(value)
}
