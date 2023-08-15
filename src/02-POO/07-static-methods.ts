// Métodos estáticos são os que podem ser chamados sem instanciar a classe
// também é possível definir propriedades / atributos estáticos

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static cumprimenta() {
    console.log('Olá!');
  }

  static idadePadrao = 18;
  static cpfPadrao = '000.111.222-33';
}

// O método estático não precisa de uma instância
Pessoa.cumprimenta();

console.log(Pessoa.idadePadrao);
