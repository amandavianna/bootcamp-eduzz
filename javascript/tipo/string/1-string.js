//Retorna o tamanho de uma string
const textSize = 'Texto'.length
console.log(`Quantidade de letras: ${textSize}`)

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x')
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText)

//Busca um valor e susbstitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT')
console.log(`\nSubstituição de valor: ${replacedText}`)

//Retorna a fatia de um valor
//parâmetros start e end
const lastChar = 'Texto'.slice(-1)
console.log(`\nÚltima letra de uma string: ${lastChar}`)

const allWithoutLastChar = 'Texto'.slice(0, -1)
console.log(`\nValor da string da primeira letra menos a última: ${allWithoutLastChar}`)

const secondToEnd = 'Texto'.slice(1)
console.log(`\nValor da string da segunda letra até a última: ${secondToEnd}`)

//Retorna N caracters a partir de uma posição
//parâmetro start e a quantidade
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2)
console.log(`\nAs duas letras primeiras letras são: ${twoCharsBeforeFirstPos}`)
