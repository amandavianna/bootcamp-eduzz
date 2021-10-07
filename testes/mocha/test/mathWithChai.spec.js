//chai - é uma biblioteca de asserts
//Ele torna mais legível os testes
//Pode ser: should, expect e assert
const expect = require('chai').expect
const Math = require('../src/math.js')

let a = 0

describe('Math class - CHAI', function() {

  beforeEach(function() {
    a = 0
  })

  it('Sum two numbers', function(done) {
    const math = new Math()
    this.timeout(3000)

    a = 5
    math.sum(a, 5, (value) => {
      expect(value).to.equal(10)
      done()
    })
  })

  it('Multiply two numbers', function() {
    const math = new Math()

    expect(math.multiply(a, 5)).to.equal(0)
  })

})
