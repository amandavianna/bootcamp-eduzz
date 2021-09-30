const myNumber = 12.4032

//Transformar número para string
const numberAsString = myNumber.toString()
console.log('Número transformado em string: ', typeof numberAsString)

//Retorna o número com a quantidade de casas decimais informada
const fixedTwoDecimals = myNumber.toFixed(2)
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals)

//Transforma uma string em float - pode vim com casas decimais - o tipo continua sendo number
const myNumberString = '13.22'
console.log('\nString parseada para float: ', parseFloat(myNumberString))

//Transforma uma string em int - retira as casas decimais -  o tipo continua sendo number
console.log('\nString parseada para int: ', parseInt(myNumberString))
