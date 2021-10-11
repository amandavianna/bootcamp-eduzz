//Omit<Type, Keys> - Constrói um tipo pegando todas as propriedades de Type e então removendo Keys.

interface Pessoa {
  nome: string;
  idade: number;
  nacionalidade: string;
}

type Brasileiro = Omit<Pessoa, 'nacionalidade'>

const estudante1: Brasileiro = {
  nome: 'Maria',
  idade: 20
}
