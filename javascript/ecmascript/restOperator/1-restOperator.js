//Rest Operator - pega todos os parâmetros de uma função e transforma em um array

function sum(...args) {

  //Prototype Array
  console.log(args)

  return args.reduce((acc, value) => acc + value, 0)

  //arguments - lista contendo todos os argumentos da função - Old-school JS
  //arguments não funciona com arrow function
  //Usa o prototype de Object
  //console.log(arguments)
}

console.log(sum(5, 5, 5, 2, 3))

//Rest Operator também serve para pegar os parâmetros restantes que estão sendo passados para a função
const sum2 = (a, b, ...rest) => {
  console.log(a, b, rest) //5 5 [ 5, 2, 3 ]
}
sum2(5, 5, 5, 2, 3)
