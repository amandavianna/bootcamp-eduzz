(() => {
  this.name = 'Nome no contexto de criação'

  //Arrow function - o this sempre vai referenciar o escopo de função global
  const getNameArrowFn = () => this.name

  //Função que não é arrow function - o this vai referenciar para o contexto em que ela foi executada
  function getName() {
    return this.name
  }

  const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
  }

  console.log(user.getNameArrowFn())
  console.log(user.getName())

})()
