//find - Retorna o primeiro item de um array que satisfaz a condição
const arr = [1, 2, 3, 4]

const firstGreaterThanTwo = arr.find(value => value > 2)
console.log(firstGreaterThanTwo) //3

//findIndex - Retorna o índice do primeiro item de um array que satisfaz a condição
const arr = [1, 2, 3, 4]

const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2)
console.log(firstIndexGreaterThanTwo) //2

//filter - Retorna um novo array com todos os elementos que satisfazem a condição
const arr = [1, 2, 3, 4]

const allValuesGreaterThanTwo = arr.filter(value => value > 2)
console.log(allValuesGreaterThanTwo) //[3, 4]

//indexOf - Retorna o primeiro índice em que um elemento pode ser encontrado no array
const arr = [1, 3, 3, 4, 3]

const firstIndexOfItem = arr.indexOf(3)
console.log(firstIndexOfItem) //1

//lastIndexOf - Retorna o último índice em que um elemento pode ser encontrado no array
const arr = [1, 3, 3, 4, 3]

const lastIndexOfItem = arr.lastIndexOf(3)
console.log(lastIndexOfItem) //4

//includes - Retorna um booleano verificando se determinado elemento existe no array
const arr = [1, 3, 3, 4, 3]

const hasItemOne = arr.includes(1)
console.log(hasItemOne) //true

const hasItemTwo = arr.includes(2)
console.log(hasItemTwo) //false

//some - Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição
const arr = [1, 3, 3, 4, 3]

const hasSomeEvenNumber = arr.some(value => value % 2 === 0)
console.log(hasSomeEvenNumber) //true

//every - Retorna um booleano verificando se todos os itens de um array satisfazem a condição
const arr = [1, 3, 3, 4, 3]

const allEvenNumbers = arr.every(value => value % 2 === 0)
console.log(allEvenNumbers) //false
