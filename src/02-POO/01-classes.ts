export class Empresa {
  // se não passar o public, o atributo é naturalmente público, ou seja, n é necessário escrever
  public readonly nome: string; // posso definir um valor padrão já aqui ou no constructor
  private readonly colaboradores: Colaborador[] = []; // -> a classe no typescript também é um Type
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    this.colaboradores.forEach((colaborador) => console.log(colaborador));
  }
}

// método resumido para definir (só funciona em TypeScript):
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

/* Legenda
  public -> pode ser acessado pela classe e por fora da classe

  readonly -> o valor informado não pode ser alterado diretamente. É similar ao const

  private -> o método só pode ser acessado dentro de própria classe

  protected -> similar ao private, porém, a propriedade pode ser acessada pela classe e suas -
  - extensões. Ex: class B extends Class A {} -> classe B é filho de A e pode acessar atributos -
  protegidos, porém não os privados, estes ficam somente para a própria classe A

*/

const empresa1 = new Empresa('Programadores Anônimos SA', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Felipe', 'Roberto');
const colaborador2 = new Colaborador('Lucas', 'Ricardo');
const colaborador3 = new Colaborador('Mariane', 'Silva');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
// ou -> structural type, onde não é necessário declarar um objeto com a classe se ele possuir as
// mesmas chaves
empresa1.adicionaColaborador({ nome: 'Fulaninho', sobrenome: 'da Silva' });

console.log(empresa1);
console.log(empresa1.nome);

empresa1.mostrarColaboradores();
