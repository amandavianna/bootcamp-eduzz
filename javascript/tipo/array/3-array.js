//for...of - Iteração de cada item dentro de um array
const frutas = ['laranja', 'uva', 'morango']

for(let fruta of frutas) {
  console.log(fruta)
}
//laranja uva morango

//for...in - Iteração de cada item dentro de um array
const frutas = ['laranja', 'uva', 'morango']

for(let fruta in frutas) {
  console.log(fruta)
}

//0 1 2

//forEach - Iteração de cada item dentro de um array
const frutas = ['laranja', 'uva', 'morango']

frutas.forEach((fruta, index) => {
  console.log(`${index} - ${fruta}`)
})

console.log(frutas) //[ 'laranja', 'uva', 'morango' ]

//map - Retorna um novo array, de mesmo tamanho, iterando cada item de um array
//imutável, não altera o array original
const frutas = ['laranja', 'uva', 'morango']

const newArray = frutas.map((fruta, index) => `${index} - ${fruta}`)

console.log(newArray) //[ '0 - laranja', '1 - uva', '2 - morango' ]
console.log(frutas) //[ 'laranja', 'uva', 'morango' ]

//flat - Retorna um novo array com todos os elementos de um sub-array
//concatenados de forma recursiva de acordo com a profundidade especificada(depth)

//vamos dizer que tenho um array dentro de um array, e quero um novo array com os itens no mesmo nível/ na mesma profundidade
const arr = [1, 2, [3, 4]]
const newArr = arr.flat()

console.log(newArr) //[ 1, 2, 3, 4 ]

//Por padrão o flat já desce um nível de profundidade
const idades = [20, 34, [35, 60, [70, 80]]]
const newIdades1 = idades.flat()
console.log(newIdades1) //[ 20, 34, 35, 60, [ 70, 80 ] ]

const newIdades2 = idades.flat(2)
console.log(newIdades2) //[ 20, 34, 35, 60, 70, 80 ]

//flatMap - Retorna um novo array assim como a função map e executa um flat de profundidade 1
const arr = [1, 2, 3, 4]

const newArr = arr.flatMap(value => value * 2)
console.log(newArr) //[ 2, 4, 6, 8 ]

const newArr = arr.flatMap(value => [value * 2])
console.log(newArr) //[ 2, 4, 6, 8 ]

const newArr1 = arr.flatMap(value => [[value * 2]])
console.log(newArr1) //[ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]

//keys - Retorna um Array Iterator que contém as chaves para cada elemento do array
const arr = [1, 2, 3, 4]

const arrIterator = arr.keys()

console.log(arrIterator) //Object [Array Iterator] {}

console.log(arrIterator.next()) //{ value: 0, done: false }
console.log(arrIterator.next()) //{ value: 1, done: false }
console.log(arrIterator.next()) //{ value: 2, done: false }
console.log(arrIterator.next()) //{ value: 3, done: false }
console.log(arrIterator.next()) //{ value: undefined, done: true }

//values - Retorna um Array Iterator que contém os valores para cada elemento do array
const arr = [1, 2, 3, 4]

const arrIterator = arr.values()

console.log(arrIterator) //Object [Array Iterator] {}

console.log(arrIterator.next()) //{ value: 1, done: false }
console.log(arrIterator.next()) //{ value: 2, done: false }
console.log(arrIterator.next()) //{ value: 3, done: false }
console.log(arrIterator.next()) //{ value: 4, done: false }
console.log(arrIterator.next()) //{ value: undefined, done: true }

//entries - Retorna um Array Iterator que contém os pares chave/valor para cada elemento do array
const arr = [1, 2, 3, 4]

const arrIterator = arr.entries()

console.log(arrIterator) //Object [Array Iterator] {}

console.log(arrIterator.next()) //{ value: [ 0, 1 ], done: false }
console.log(arrIterator.next()) //{ value: [ 1, 2 ], done: false }
console.log(arrIterator.next()) //{ value: [ 2, 3 ], done: false }
console.log(arrIterator.next()) //{ value: [ 3, 4 ], done: false }
console.log(arrIterator.next()) //{ value: undefined, done: true }
