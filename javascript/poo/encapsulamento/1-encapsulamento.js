//Encapsulamento
//É a maneira de como ocultar determinados elementos (atributos e métodos) de uma classe das demais classes.

'use strict'

// function Person(initialName) {
//   var name = initialName

//   Object.defineProperty(this, 'name', {
//     get: function() {
//       return name
//     },
//     set: function() {
//       name = value
//     }
//   })
// }

// ---------

class Person {
  #name = '' // # informa que o atributo é privado

  constructor(name) {
    this.#name = name
  }

  get getName() {
    return this.#name
  }

  set setName(name) {
    this.#name = name
  }
}

const p = new Person()

//O name só pode ser acessado fora da class "Person" através dos métodos Get e Set.
p.setName = "Amanda"

console.log(p.getName) //Amanda

//p.#name = 'Maria'
// SyntaxError: Private field '#name' must be declared in an enclosing class
// Proibindo a utilização e o rename do atributo
