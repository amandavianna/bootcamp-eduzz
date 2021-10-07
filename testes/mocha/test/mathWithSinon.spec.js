//Sinon - Podemos mocar funções e observar se elas foram invocadas.
const expect = require('chai').expect
const sinon = require('sinon')
const Math = require('../src/math.js')

describe('Math class - Sinon', function() {

  it.only('Calls req with sum and index values', function() {
    const req = {}
    const res = {
      load: sinon.spy()
      // load: function load() {
      //   console.log('Called!')
      // }
    }

    //spy - Criar uma função ou interceptar a execução de uma outra função a fim de obter dados sobre como a mesma foi invocada.
    //spy - para adicionar uma função já existente
    //sinon.spy(res, 'load')

    //stub - para susbtituir métodos e retornar um outro valor
    //sinon.stub(res, 'load').returns('xpto')

    const math = new Math()

    math.printSum(req, res, 5, 5)

    expect(res.load.calledOnce).to.be.true
    expect(res.load.args[0][0]).to.equal('index')
    expect(res.load.args[0][1]).to.equal(10)

  })
})
