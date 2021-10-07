//Promises
//Possui 3 estados: pending (está em execução), fulfilled (acabou de executar), rejected (caso aconteça algum erro)

const doSomethingPromise = () => new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved('First data')
  }, 1000);
})

const doOtherThingPromise = () => new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved('Second data')
  }, 1000);
})

doSomethingPromise()
  .then(data => console.log(data)) //First data

//As promises permitem que encadeie umas nas outras
//Acontece de forma sequencial
doSomethingPromise()
  .then(data => {
    console.log(data)
    return doOtherThingPromise()
  })
  .then(data2 => console.log(data2))
  .catch(error => console.log('Ops!', error))

//Tratando erro de Promise
const doSomethingPromiseWithError = new Promise((resolved, reject) => {
  throw new Error('Something went wrong')
  setTimeout(() => {
    resolved('First data')
  }, 1000);
})

doSomethingPromiseWithError
  .then(data => console.log(data))
  .catch(error => console.log(error)) //Error: Something went wrong
