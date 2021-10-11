//Quando eu não defino o que a função recebe e nem o que a função retorna, seu valor será do tipo any.

//Quando não sabemos o que vai receber colocamos T
function adicionaApendieALista<T>(array: T[], valor: T) {
  return array.map(() => valor)
}

adicionaApendieALista([1, 2, 3], 1)
adicionaApendieALista(['A', 'B', 'C'], 'D')
