//EventEmitter - trabalha com eventos dentro do node

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', (data) => {
  console.log(data)
})

//emit - usado para chamar um evento
eventEmitter.emit('start', { user: 'Amanda Vianna' })

//Podemos usar de outra maneira
class Users extends EventEmitter {
  userLogged(data) {
    this.emit('User logged', data)
  }
}

const users = new Users()

//once - método para consumir apenas uma vez
users.once('User logged', data => {
  console.log(data)
})

users.userLogged({ userName: 'Amandaa'})
users.userLogged({ userName: 'Filipe'})
