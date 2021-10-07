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

//Promise.all - Para a promise rodar em paralelo, porém o then só será executado quando as promises terminarem de rodar
Promise.all([doSomethingPromise(), doOtherThingPromise()])
  .then(data => {
    console.log(data)//[ 'First data', 'Second data' ]
    console.log(data[0].split(''))
    console.log(data[1].split(''))
  })
  .catch(err => console.log('Opes!', err))

//Promise.race - Vai executar o then com a promise que for resolvida primeiro
Promise.race([doSomethingPromise(), doOtherThingPromise()])
  .then(data => {
    console.log(data)
  })
