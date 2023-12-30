export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string, // quando se usa get e set, utiliza-se um _ na variável, para não repetir e apresentar erro
  ) {
    this.cpf = _cpf; // é possível já inicializar o objeto atribuindo um cpf igual ao _cpf que o usuário informou
  } // ^ isto é opcional

  // a vantagem de se utilizar os getters e setters em vez de tornar a propriedade pública, é:
  // os valores podem ser tratados antes serem retornados ao usuário, através de funções. Ex:

  get cpf() {
    console.log('Getter chamado');
    return this._cpf.replaceAll('.', '').replaceAll('-', '');
  }
  set cpf(valor: string) {
    console.log('Setter chamado');
    this._cpf = valor;
  }
}

const pessoa = new Pessoa('Fulaninho', 'da Silva', 26, '000.111.222-33');

console.log(pessoa.cpf);
pessoa.cpf = '444.555.666-77'; // agora para chamar o set, basta usar o =
console.log(pessoa.cpf); // para chamar o get, utiliza-se a notação ponto normalmente
