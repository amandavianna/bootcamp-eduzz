'use strict'

class Person {
  constructor(name) {
    this.name = name
  }
}

class PhysicalPerson extends Person {
  constructor(name, cpf) {
    super(name)
    this.cpf = cpf
  }
}

const pessoa = new PhysicalPerson('Maria', '111111')

console.log(pessoa) //PhysicalPerson { name: 'Maria', cpf: '111111' }
