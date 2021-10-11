//Interface
//É uma estrutura que define o contrato da sua aplicação.
//Exige que o valor atenda ao contrato de todos os membros dos tipos.

//Usamos para definir contratos de estruturas de dados e classes

//Esse padrão de escrever com o I na frente do nome da interface, vem por causa do Java e C#, mas não é obrigatório.

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  executarRugido: (executarRugido) => console.log(`${executarRugido}dB`)
}

animal.executarRugido(90)

const felino: IFelino = {
  nome: 'Leão',
  tipo: 'terrestre',
  visaoNoturna: true,
  executarRugido: (executarRugido) => console.log(`${executarRugido}dB`)
}

felino.executarRugido(114)
