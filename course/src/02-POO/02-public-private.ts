export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    this.colaboradores.forEach((colaborador) => console.log(colaborador));
  }

  public getNome(): string {
    // public -> método ou parâmetro acessível fora da classe
    return this.nome;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string, // neste caso, é necessário informar o public mesmo redundante
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Empresa('Programadores Empregados SA', '11.111.111/0001-11');

console.log(empresa.getNome(), empresa.nome); // -> publics
