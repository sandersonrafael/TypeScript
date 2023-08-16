// type alias -> usa-se type em vez de class e não possui as características das classes
// mais utilizado em funções

type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string; // ou nomeCompleto: () => string;
};

// com o &, adicionam-se as características de cada tipo em um novo
// que precisa ter os tipos de cada um presentes
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

// como o TipoPessoa não é classe, usa-se implements em vez de extends
export class Pessoa implements TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Nome Ok', 'Sobrenome Ok');
console.log(pessoa.nomeCompleto());
