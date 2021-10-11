//Definimos que os parâmetros a e b vão aceitar valores apenas com o tipo number
function sum(a: number, b: number) {
  return a + b
}

console.log(sum(1, 4)) //5

//Inferência de tipo
//Valores padrão tornam os parâmetros opcionais.
//Normalmente podemos omitir anotações de tipo, porque o TypeScript pode inferir os tipos.
function sumWithDefaultValue(a = 0, b: number = 2) {
  return a + b
}

console.log(sumWithDefaultValue()) //2

//a e b vão aceitar dois tipos: null | number
function sumUnionType(a: null|number = null, b: null|number = null) {
  return a + b
}

console.log(sumUnionType()) //0
