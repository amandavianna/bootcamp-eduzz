'use strict'

//static - Permite acessar métodos/atributos sem instanciar uma determinada classe.

class Person {
  static walk() {
    return "walking..."
  }
}

console.log(Person.walk()) //walking...

//é a mesma coisa que o exemplo abaixo:

function Person1() {}

Person1.walk = function() {
  return "walking..."
}

console.log(Person1.walk()) //walking...
