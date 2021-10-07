//Destructuring Assignment - É uma expressão que permite extrair dados de um Array ou Object em variáveis distintas.

//Array
const arr = ['Apple', 'Banana', 'Orange', ['Tomato']]

//Atribui o valor do array para uma variável
let [apple2, banana2, orange2, [ tomato2 ]] = arr

console.log(apple2) //Apple

console.log(tomato2) //Tomato

//Object
const obj = {
  name: 'Amanda'
}

let { name } = obj
console.log(name) //Amanda

//Para atribuírmos o valor da propriedade de um objeto para uma variável
let { name: name2 } = obj
console.log(name2) //Amanda

//Não altera o valor do objeto original se você atribuir o valor da propriedade de um objeto para uma variável
name2 = 'Filipe'

console.log(obj) //{ name: 'Amanda' }

//Destructuring de multi níveis
//Fazendo o destructuring do objeto de dentro de sua propriedade
let obj1 = {
  name: 'Amanda',
  props: {
    age: 35,
    favoriteColors: ['black', 'pink']
  }
}

let { props: { age, favoriteColors: [color1, color2] } } = obj1

console.log(age) //35
console.log(color1) //black
console.log(color2) //pink

//Array de objeto
const arr1 = [
  {
    name: 'Aplle',
    type: 'fruit'
  }
]

let [ { name: fruitName, type } ] = arr1

console.log(fruitName) //Aplle
console.log(type) //fruit

//Functions - Array
function sum([a, b]) {
  return a + b
}

console.log(sum([5, 5])) //10

//Default Value - Array
function sum1([a, b] = [0, 0]) {
  return a + b
}

console.log(sum1()) //0
console.log(sum1([2, 3])) //5

//Functions - Object
function sum({ a, b }) {
  return a + b
}

console.log(sum({ a: 5, b: 5 })) //10
