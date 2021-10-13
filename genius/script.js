let order = []
let clickedOrder = []
let score = 0

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const coloredButtons = document.querySelectorAll('.coloredButtons > button')
const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

const startButton = document.querySelector('.startButton')
const message = document.querySelector('.message')
const numberScore = document.querySelector('.numberScore')

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * coloredButtons.length)
  order[order.length] = colorOrder

  clickedOrder = []

  for(let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}

const lightColor = (element, number) => {
  number *= 500
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)

  setTimeout(() => {
    element.classList.remove('selected')
  }, number)
}

const checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] !== order[i]) {
      gameOver()
      break
    }
  }

  if(clickedOrder.length === order.length) {
    numberScore.innerHTML = score
    nextLevel()
  }
}

const click = (color) => {
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder()
  }, 250)
}

const createColorElement = (color) => {
  switch (color) {
    case 0:
      return green
    case 1:
      return red
    case 2:
      return yellow
    case 3:
      return blue
  }
}

const nextLevel = () => {
  score++
  shuffleOrder()
}

const gameOver = () => {
  message.innerHTML = 'Game over!'

  startButton.removeAttribute('disabled')
  disabledColoredButtons()

}

const playGame = () => {
  message.innerHTML = 'Play Game'

  score = 0
  order = []
  clickedOrder = []

  startButton.setAttribute('disabled', 'disabled')
  enableColoredButtons()

  nextLevel()
}

const enableColoredButtons = () => {
  coloredButtons.forEach(item => item.removeAttribute('disabled'))
}

const disabledColoredButtons = () => {
  coloredButtons.forEach(item => item.setAttribute('disabled', null))
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

startButton.onclick = () => playGame()
