export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}
  getIdade = (): number => this.idade;
  getCpf = (): string => this.cpf;
  getNomeCompleto = (): string => this.nome + ' ' + this.sobrenome;
}
const pessoa = new Pessoa('Lucas', 'Oliveira', 19, '000.000.000-11');
console.log(pessoa.getNomeCompleto(), pessoa.getIdade(), pessoa.getCpf());

// aluno herda tudo presente na classe Pessoa
export class Aluno extends Pessoa {
  getNomeCompleto = (): string => `Nome completo: ${this.nome} ${this.sobrenome}`;
  // método alterado e propriedades mantidas
}

export class Cliente extends Pessoa {
  getNomeCompleto = (): string => `Nome: ${this.nome} ${this.sobrenome}`;
  // método alterado e propriedades mantidas
}

const aluno = new Aluno('Fulano', 'da Silva', 16, '111.222.333-44');
const cliente = new Cliente('Ciclano', 'de Tal', 17, '555.666.777-88');

console.log(pessoa, '\n', aluno, '\n', cliente);

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
