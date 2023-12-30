// super refere-se à classe mãe / pai

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}
  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    console.log('Fazendo algo antes e depois chamando o método do super');
    const result = super.getNomeCompleto(); // chamando super
    return result + 'Modificação da superClasse';
  }
}
const aluno = new Aluno('bla bla', 'ble ble', 16, '000.000.000-00');
console.log(aluno.getNomeCompleto());

// para editar o constructor, é necessário repetir todos e adicionar os novos,
// da seguinte maneira ->
export class Cliente extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, // adiciona a nova propriedade da maneira resumida ou "atalho"
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    return `Nome: ${this.nome} ${this.sobrenome}`;
  }
}
