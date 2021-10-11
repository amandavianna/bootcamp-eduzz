//Se você está usando o document.getElementById, o TypeScript só saberá que retornará algum tipo de HTMLElement.
//Nessa situação, você precisa informar ao TypeScript qual o tipo de elemento que você está pegando.
const input = document.getElementById('input') as HTMLInputElement

input.addEventListener('input', event => {
  //Com isso você consegue ver a lista com todos os métodos que aquele elemento possui.
  const inputElement = event.currentTarget as HTMLInputElement
  console.log(inputElement.value)
})
