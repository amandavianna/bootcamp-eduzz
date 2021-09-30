const symbol1 = Symbol()
const symbol2 = Symbol()

//Symbol cria funções únicas, por mais que os atributos tenham o mesmo valor, ele continua sendo único
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2 )

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user = {
  [nameSymbol1]: 'Amanda',
  [nameSymbol2]: 'Outro nome',
  lastName: 'Vianna'
}

console.log(user)

//Symbols criam proprieadades que não são enumberables
//Não consegue acessar os Symbols
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user[key]}`)
  }
}

console.log('Propriedades do objeto user: ', Object.keys(user))
console.log('\nValores das propriedades do objeto user: ', Object.values(user))

//Exibe todos os Symbols de um objeto
console.log('\nSymbols registrados no objeto user: ', Object.getOwnPropertySymbols(user))

//Acessando todas as propriedades do objeto - método Reflect
console.log('Todas as propriedades do objeto user: ', Reflect.ownKeys(user))

//Criar um enum
const directions = {
  UP   : Symbol('UP'),
  DOWN : Symbol('DOWN'),
  LEFT : Symbol('LEFT'),
  RIGHT: Symbol('RIGHT')
}
