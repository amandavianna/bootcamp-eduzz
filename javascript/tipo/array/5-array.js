//sort - Ordena os elementos de um array de acordo com a condição
const arr = [1, 3, 2, 5, 4]

console.log(arr.sort()) [ 1, 2, 3, 4, 5 ]

const students = [
  { name: 'Amanda', grade: 10},
  { name: 'Guilherme', grade: 8},
  { name: 'Maria', grade: 5},
  { name: 'João', grade: 6}
]

students.sort((current, next) => current.grade - next.grade)
console.log(students) //array ordenado por notas do menor para o maior

students.sort((current, next) => next.grade - current.grade)
console.log(students) //array ordenado por notas do maior para o menor

//reverse - Inverte os elementos de um array
const arr = [1, 2, 3, 4, 5]

arr.reverse()

console.log(arr) //[ 5, 4, 3, 2, 1 ]
