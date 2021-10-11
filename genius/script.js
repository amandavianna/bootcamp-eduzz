let order = []
let clickedOrder = []
let score = 0

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

//Cria ordem aleatória de cores
let shuffleOrder = () => {
  // Math.floor(x) - Retorna o maior inteiro que é menor ou igual a um número.
  // Math.random() - Retorna um número pseudo-aleatório entre 0 e 1.
  // 4 - Vai sortear um número entre 0 e 3.
  let colorOrder = Math.floor(Math.random() * 4)

  //Atribui o índice do array com a cor que sair da função de sorteio
  order[order.length] = colorOrder

  clickedOrder = []

  //Acende a cor que corresponde ao número sorteado
  for(let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}

//Acende a próxima cor
let lightColor = (element, number) => {
  number = number * 500
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)

  setTimeout(() => {
    element.classList.remove('selected')
  })
}

//Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      gameOver()
      break
    }
  }

  if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`)
    nextLevel()
  }
}

//Função para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder()
  }, 250)

}

//Função que retorna a cor
let createColorElement = (color) => {
  if(color == 0) {
    return green
  } else if (color == 1) {
    return red
  } else if (color == 2) {
    return yellow
  } else if (color == 3) {
    return blue
  }
}

//Função para próximo nível do jogo
let nextLevel = () => {
  score++
  shuffleOrder()
}

//Função para game over
let gameOver = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`)
  order = []
  clickedOrder = []

  playGame()
}

//Função do início do jogo
let playGame = () => {
  alert('Bem vindo ao Genius! Iniciando novo jogo!')
  score = 0

  nextLevel()
}

//Eventos de clique para as cores
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

//Início do jogo
playGame()
