//O módulo assert é nativo do Node.js
const assert = require('assert')
const Math = require('../src/math.js')

let a = 0

//Describe - é uma função do Mocha que ajuda a estruturar nossos testes, indicando quais testes dizem respeito a quais funcionalidades.
//O primeiro parâmetro é o nome da funcionalidade que estamos testando e o segundo é uma função que irá conter os testes.
describe('Math class', function() {
  //Hooks - formas de executar código e evitar repetição.
  //Os hooks podem ser: before, after, beforeEach, afterEach

  //beforeEach - o código é executado antes de cada it.
  beforeEach(function() {
    a = 0
  })

  //A função it corresponde a um teste.
  //Recebe uma descrição do que deve acontecer para que o teste passe e uma função que descreve o comportamento esperado.
  it('Sum two numbers', function(done) {
    const math = new Math()
    this.timeout(3000) //Esse this se refere ao contexto do mocha

    //throw new Error('Oh no!!'); //Maneira para forçar um error
    a = 5
    math.sum(a, 5, (value) => {
      assert.equal(value, 10)
      done()
    })
  })

  //it.skip - faz com que o mocha não execute esse teste e o torne pendente
  //it.skip('Multiply two numbers', function() {})

  //it.only - faz com que o mocha execute apenas esse teste
  //it.only('Multiply two numbers', function() {})

  it('Multiply two numbers', function() {
    const math = new Math()

    assert.equal(math.multiply(a, 5), 0)
  })
})

//Obs:
// - Não utilizamos arrow functions como parâmetros nas nossas funções de describe ou it, pois o uso dessas funções é desencorajado devido a problemas relacionados ao escopo léxico do this e o contexto do Mocha, que não poderia ser acessado.
// - O limite do timeout no mocha é de 2000ms, podemos alterar usando this.timeout(3000)
