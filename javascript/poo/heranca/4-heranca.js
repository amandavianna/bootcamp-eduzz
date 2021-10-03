'use strict'

function Animal(qtdePatas) {
  this.qtdePatas = qtdePatas

  this.movimentar = function() {} //método
}

function Cachorro(morde) {
  Animal.call(this, 4)

  this.morde = morde //atributo morde
  this.latir = function() {
    console.log('Au! Au!')
  }
}

const pug = new Cachorro(false)
console.log(pug)

const pitbull = new Cachorro(true)
console.log(pitbull)

/**
 O problema desse exemplo é que toda vez que eu der um new Cachorro(),
 a funcão latir e movimentar vão ser criadas novamente.
*/
