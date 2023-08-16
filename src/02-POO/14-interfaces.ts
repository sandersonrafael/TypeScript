// interface -> similar ao type alias (type Tal = { ... });
// mais comumente utilizado em objetos e classes

// diferente do alias, usa-se a palavra reservada "interface"
// em vez de "type" e não usa o sinal de = nem ; no final
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// é possível se usar vários tipos de interface com extends -> resultado é a soma de todos extends
interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

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
