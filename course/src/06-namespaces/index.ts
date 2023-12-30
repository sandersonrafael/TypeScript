// é similar ao sistema de módulos de arquivos do javascript, mas implementado pelo próprio TypeScript

// eslint-disable-next-line
namespace MeuNamespace { // namespace (sistema de importação e exportação de módulos) chamado MeuNamespace
  const nomeDoNamespace = 'Fulaninho';

  // poderá ser acessado fora do namespace devido ao export
  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('Jaumzim');

  console.log(nomeDoNamespace, pessoaDoNamespace);
}

const { PessoaDoNamespace } = MeuNamespace;

export const outraPessoaDoNamespace = new PessoaDoNamespace('Ciclaninho');
console.log(outraPessoaDoNamespace);
