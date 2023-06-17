function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Rafael',
  sobrenome: 'Ferreira',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('Rafael', 'Ferreira');
pessoa.exibirNome();

export { pessoa };
