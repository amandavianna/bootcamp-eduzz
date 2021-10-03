'use strict'

function Animal() {}

//A função construtora permite que eu escreva no prototype
//O prototype contem a definição do meu objeto
Animal.prototype.qtdePatas = 0
Animal.prototype.movimentar = function() { console.log('movimentar!!!!') }

function Cachorro(morde) {
  this.qtdePatas = 4
  this.morde = morde
}

//Quando eu vou criar o prototype de Cachorro, eu falo que ele é derivado do prototype de Animal
//Então ele já vai ter no seu prototype qtdePatas e movimentar por padrão.
Cachorro.prototype = Object.create(Animal.prototype)
Cachorro.prototype.latir = function() {
  console.log('Au! Au!')
}

const pug = new Cachorro(false)
pug.movimentar()
