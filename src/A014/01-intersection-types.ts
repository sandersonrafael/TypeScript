type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  idade: 15,
  nome: 'Lucas',
  sobrenome: 'Silva',
};

export { pessoa };

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersecao = AB & AC & AD;
