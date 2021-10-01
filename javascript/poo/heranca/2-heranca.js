'use strict'

/**
  O que ocorre quando pego uma função construtora e chamo ela com o operador new?

  1 - Um novo objeto é criado, herdando Animal.prototype
  2 - A função construtora Animal é chamada como os argumentos especificados e
      com o 'this' vinculado ao novo objeto criado.
  3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será
      retornado o objeto criado no passo 1.
*/

function Pessoa(name) {
  this.name = name
}

const pessoa1 = new Pessoa('Amanda')
console.log(pessoa1.name)

// Caso a função construtora tenha um retorno explícito, será retornado o seu 'return'
function PessoaWithReturn(name) {
  this.name = name

  return {
    name: 'Teste'
  }
}

const pessoa2 = new PessoaWithReturn('Amanda')
console.log(pessoa2.name)
