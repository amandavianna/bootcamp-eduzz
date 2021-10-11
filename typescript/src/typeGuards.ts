interface IUsuario {
  readonly id: number;
  email: string;
  idade?: number; //usar ? a propriedade se torna opcional
}

interface IAdmin extends IUsuario {
  cargo: 'gerente' | 'coordenador' | 'supervisor';
}

type UsuarioSomenteLeitura = {
  readonly [K in keyof IUsuario]-?: IUsuario[K] //-? remove os valores opcionais
}

function redirecione(usuario: IUsuario | IAdmin) {
  if ('cargo' in usuario) {
    //Então é uma interface IAdmin
    console.log(`Usuário com cargo de ${usuario.cargo}`)
  } else {
    console.log('Esse usuário não possui nenhum cargo.')
  }

  if(usuario.idade) {
    console.log(`Idade: ${usuario.idade}`)
  }
}

const Maria: IUsuario = {
  id: 1,
  email: 'maria@teste.com.br',
  idade: 20
}

const Joao: IAdmin = {
  id: 2,
  email: 'joao@teste.com.br',
  cargo: 'coordenador',
  idade: 45
}

redirecione(Joao)

const Pedro: UsuarioSomenteLeitura = {
  id: 4,
  email: 'pedro@teste.com',
  idade: 20
}

//Pedro.id = 5 //o TypeScript informa um erro, pq a prorpiedade id foi definida somente como leitura
