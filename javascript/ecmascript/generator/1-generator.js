//Generator functions - é uma função com pausas
//Usa a sintaxe function*
//Contém uma ou mais expressões yield.

function* hello() {
  console.log('Hello')
  yield

  console.log('From')
  yield 'qualquerValor' //pode informar um valor para cada iteração, passando um argumento para o yield

  console.log('Function')

  const value = yield 3
  console.log(value)

}

const it = hello()

console.log(it.next())
// Hello
// { value: undefined, done: false }

console.log(it.next())
// From
// { value: 'qualquerValor', done: false }

console.log(it.next())
// Function
// { value: 3, done: false }

console.log(it.next('outside!')) //podemos passar um valor que será enviado para o yield
// outside!
// { value: undefined, done: true }
