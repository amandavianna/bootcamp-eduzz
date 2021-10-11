//Type Aliases
//Cria um novo nome para um tipo.
//Cria um novo tipo mais complexo do que o tipo primitivo em si.
//Conseguimos criar tipos com mais informações.
//Utilizamos para fazer junções de interfaces.

interface Animal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
}

interface Felino extends Animal {
  visaoNoturna: boolean;
}

interface Canino extends Animal {
  porte: 'pequeno' | 'medio' | 'grande'
}


// & - and
// | - or
type Domestico = Felino | Canino

const meuCachorro: Domestico = {
  nome: 'Pug',
  tipo: 'terrestre',
  porte: "pequeno",
}
