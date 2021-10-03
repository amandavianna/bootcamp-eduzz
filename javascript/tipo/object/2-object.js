const user = {
  name: 'Amanda',
  lastName: 'Vianna'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user))

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user))

//Retorna um array de array contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user))

//Mergear propriedade de objetos
//O primeiro parametro vai ser onde ele vai fazer o merge
Object.assign(user, {fullName: 'Amanda Vianna'})

console.log('\nAdiciona a propriedade fullName no objeto user', user)

//Pensando em imutabilidade o exemplo acima não é o mais recomendado,
//pois não queremos alterar o objeto principal e sim criarmos um novo objeto contendo a junção dos objetos.
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos ', Object.assign({}, user, {age: 35}))

//Previne todas as alterações em um objeto
const newObj = {
  foo: 'bar'
}
Object.freeze(newObj)

newObj.foo = 'changes'
delete newObj.foo
newObj.bar = 'foo'

console.log('\nVariável newObj após as alterações: ', newObj)

//Permite apenas a alteração/edição de propriedades existentes em um objeto
const person = {
  name: 'Amanda'
}
Object.seal(person)

person.name = 'Amanda Vianna'
delete person.name
person.age = 26

console.log('\nVariável person após as alterações: ', person)
