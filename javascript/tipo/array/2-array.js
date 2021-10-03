//Criação de array
const arr1 = [1, 2, 3]

const arr2 = new Array(1, 2, 3)

const arr3 = Array.of(1, 2, 3)

//Array.of - cria a instância a partir de um número informado
const persons = Array.of('John', 'Cris', 'Jenny')

console.log(persons)

//Cria um array com N posições vazias
const arr2 = Array(3)

//Array.from - cria uma nova instância de array a partir de um parâmetro array-like ou iterable object
const divs = document.querySelectorAll('div') //nodelist - não tem as opções de array
const arr = Array.from(divs) //transforma em array

//push - Inserir um ou mais elementos no final do array
//Retorna o tamanho do novo array
const frutas = ['melancia', 'banana']
const frutasLength = frutas.push('uva')

console.log(frutasLength) //3
console.log(frutas) //[ 'melancia', 'banana', 'uva' ]

//pop - Remove o último elemento de um array
//Retorna o elemento removido
const frutas = ['melancia', 'banana']
const removedItem = frutas.pop()

console.log(removedItem) //banana
console.log(frutas) //[ 'melancia']

//unshift - Adicionar um ou mais elementos no início do array
//Retorna o tamanho do novo array
const frutas = ['melancia', 'banana']
const frutasLength = frutas.unshift('morango')

console.log(frutasLength) //3
console.log(frutas) //[ 'morango', 'melancia', 'banana' ]

//shift - Remove o primeiro elemento de um array
//Retorna o elemento removido
const frutas = ['melancia', 'banana']
const removedItem = frutas.shift()

console.log(removedItem) //melancia
console.log(frutas) //[ 'banana']

//concat - Concatena um ou mais arrays retornando um novo array
const frutas = ['melancia', 'banana']
const salgados = ['coxinha', 'kibe', 'empada']

const alimentos = frutas.concat(salgados)

console.log(alimentos) //[ 'melancia', 'banana', 'coxinha', 'kibe', 'empada' ]

//slice - Retorna um novo array "fatiando" o array de acordo com início e fim
const arr = [1, 2, 3, 4, 5]

//o 0 informa de qual índice que vai começar, lembrando que o array começa de índice 0
//o 2 é o índice final, aonde ele vai parar
console.log(arr.slice(0,2)) // [ 1, 2 ]

//se passar apenas 1 parâmetro, vai começar a fatiar a partir do número informado
console.log(arr.slice(2)) // [ 2, 4, 5 ]

//se informar um número negativo, ele faz inverso, pegando a última posição do array
console.log(arr.slice(-1)) // [ 5 ]

//pega 3 elementos a partir da última posição do array
console.log(arr.slice(-3)) // [ 3, 4, 5 ]

//splice - Altera um array adicionando novos elementos enquanto remove elementos antigos
//Não é imutável

//A partir da posição 2 vai remover os ítens
const arr = [1, 2, 3, 4, 5]
console.log(arr.splice(2)) //[ 3, 4, 5 ]
console.log(arr) //[ 1, 2 ]

//Remover e adicionar elemento no mesmo lugar do array
const arr = [1, 2, 3, 4, 5]

//primeiro parâmetro é onde vou alterar o array,
//o segunto parâmetro é quantos ítens eu vou remover
//o terceiro parâmetro é o que vai ser adicionado
console.log(arr.splice(0, 0, 'first')) //[]
console.log(arr) //[ 'first', 1, 2, 3, 4, 5 ]

//O retorno vai ser o ítem que foi removido
const frutas = ['melancia', 'banana']
console.log(frutas.splice(1, 0, 'acerola')) //[]
console.log(frutas) //['melancia', 'acerola', 'banana']

console.log(frutas.splice(2, 1, 'laranja', 'amora')) //['banana']
console.log(frutas) //['melancia', 'acerola', 'laranja', 'amora']
