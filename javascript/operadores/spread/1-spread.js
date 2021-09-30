//Spread
var partes = ['ombro', 'joelho']
var musica = ['cabeca', ...partes, 'pe'] //[ 'cabeca', 'ombro', 'joelho', 'pe' ]


function fn(x, y, z) {
  console.log(x, y, z)
}

var args = [0, 1, 2]
fn(...args)
