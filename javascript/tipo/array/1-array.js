//Array também é um objeto
const users = ['Amanda', 'Guilherme', 'Filipe']

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Amanda',
    age: 35,
    gender: gender.WOMAN
  },
  {
    name: 'Guilherme',
    age: 26,
    gender: gender.MAN
  },
  {
    name: 'Filipe',
    age: 36,
    gender: gender.MAN
  }
]

//Retornar a quantidade de itens de um array
console.log(`Itens: ${persons.length}`)

//Verificar se é array
console.log('\nA variável persons é um array: ', Array.isArray(persons))

//Iterar os itens do array para cada item
//Os argumentos podem ser o próprio item, o index e array como um todo
persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} index: ${index}`, arr)
});

//Conceito de Imutabilidade
//filter, map e reduce - não alteram a referência do nosso objeto, eles retornam um novo objeto

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens:', mens)

//Retornar um novo, sem alterar o array original
const personsWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript'
  return person
})

console.log('\nPessoas com a adição do course:', personsWithCourse)

//Transformar um array em outro tipo
//Recebe uma função como sendo o seu primeiro parâmetro e o segundo é o valor que vai começar a interar, nesse caso 0.
const totalAge = persons.reduce((age, person) => {
  age += person.age
  return age
}, 0)

console.log('\nSoma de idade das pessoas', totalAge)

//Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                          age += person.age
                          return age
                        }, 0)

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges)
