function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

export const pessoa = {
  nome: 'Rafael',
  sobrenome: 'Ferreira',

  showName(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

noReturn('fulano', 'da silva');
pessoa.showName();
