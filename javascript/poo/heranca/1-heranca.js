//Herança
//Permite que classes compartilhem seus atributos e métodos.

/**
  A herança no JavaScript é baseada em protótipos.

  prototype - é uma variável que armazena as definições do nosso objeto.

  Toda vez que agente cria uma variável no Javascript, ela tem essa referência __proto__ ,
  que aponta para o prototype do tipo que agente criou. Esse tipo chamamos de constructor.
*/


'use strict';
const myText = 'Hello prototype' //string

myText.split('') //de onde vem esse split?


// a mesma declaração do exemplo de cima:

const myText1 = String('Hello prototype') //myText1 está usando a função construtora que se chama String

//Toda função construtora tem um prototype atrelado a ela
//Toda vez que crio uma variável a partir de uma função construtora, vamos ter a referência do __proto__ nela.

myText1.__proto__split //ƒ split() { [native code] }
String.prototype.split //ƒ split() { [native code] }

//O __proto__ aponta para o prototype do construtor, que nesse caso o construtor é a String
myText1.__proto__split === String.prototype.split //true

myText1.constructor === String //true

//__proto__ -> prototype -> constructor

/**
 O __proto__ aponta para o prototype.
 E o prototype é criado a partir de uma função constructora.

 myText1.constructor -> String
 myText1.__proto__ -> String.prototype

 */
