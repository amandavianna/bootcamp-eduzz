'use strict'

function Animal() {
  this.qtdePatas = 4 //atributo chamado qtdePatas
}

console.log(Animal.constructor) //O constructor de Animal vai ser uma Function

const cachorro = new Animal()

console.log(cachorro.qtdePatas) //4

console.log(cachorro.__proto__ === Animal.prototype) //true
console.log(Animal.__proto__ === Function.prototype) //true

//Descobrir de quem a instância foi criada
console.log(cachorro instanceof Animal) //true
console.log(cachorro instanceof Function) //false

function Cachorro(morde) {
  Animal.call(this, 4)
  //A função call permite chamar um contexto (this) para essa função ser executada.
  //Nesse caso estou passando o contexto (this) desse objeto novo que estou criando de cachorro (pug) para a função construtora Animal.

  this.morde = morde //atributo morde
}

const pug = new Cachorro(false)
console.log(pug) //Cachorro { qtdePatas: 4, morde: false }
