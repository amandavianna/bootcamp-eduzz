//join - Junta todos os elementos de um array, separados por um delimitador e retorna uma string
const arr = [1, 2, 3, 4, 5]

console.log(arr.join('-')) //1-2-3-4-5

//reduce - Retorna um novo tipo de dado iterando cada posição de um array
const arr = [1, 2, 3, 4, 5]

const total = arr.reduce((total, value) => total += value, 0)

console.log(total) //15
