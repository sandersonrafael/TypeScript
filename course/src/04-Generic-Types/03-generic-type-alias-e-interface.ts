// é possível atribuir valores padrões, igualmente às funções
interface Pessoa<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type Pessoa2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno: Pessoa<string, number> = {
  nome: 'Fulano',
  sobrenome: 'de Tal',
  idade: 15,
};

const robot: Pessoa<number, number> = {
  nome: 115123,
  sobrenome: 5,
  idade: 123,
};

// como não foi informado, assumiram-se os tipos padrões
const novoAluno: Pessoa = {
  nome: 'Eduardo',
  sobrenome: 'Oliveira',
  idade: 30,
};

const novoRobot: Pessoa2 = {
  nome: 'Robô moderno',
  sobrenome: '05-A',
  idade: 5,
};

console.log({ aluno, robot, novoAluno, novoRobot });
