let user = {
  name: 'Amanda'
}

console.log(user)

//Alterando a propriedade de um objeto
user.name = 'Outro nome 1'
user['name'] = 'Outro nome 2'

console.log(user)

const prop = 'name'
user[prop] = 'Outro nome 3'

console.log(user)

//Criando uma nova propriedade
user.lastName = 'Vianna'

console.log(user)

//Deletando uma propriedade
delete user.name

console.log(user)
