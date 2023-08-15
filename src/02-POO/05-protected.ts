export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = []; // acessível pela classe e suas subclasses
  private readonly cnpj: string;

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop() as Colaborador;
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string, // neste caso, é necessário informar o public mesmo redundante
    public readonly sobrenome: string,
  ) {}
}

const empresa = new Udemy();

const colaboradorRemovido = empresa.popColaborador();
console.log(colaboradorRemovido);
