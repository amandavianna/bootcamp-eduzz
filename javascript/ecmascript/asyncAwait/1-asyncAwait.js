//async - quando coloco a palavra async, automaticamente já transforma a função em uma promise.
//await - sempre que eu tiver uma promise, e quiser aguardar que ela seja resolvida

//Só podemos usar o await dentro de funções que tenham async

const asyncTimer = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Amanda')
  }, 1000);
})

const simpleFunc = async () => {
  const data = await asyncTimer() //executa esse código primeiro e só depois executa o restante da função
  console.log(data)

  const dataJSON = await fetch('./data.json').then(resStream => resStream.json())

  return dataJSON
}

//console.log(simpleFunc()) //Promise {<fulfilled>: 123}

simpleFunc()
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
