// ao definir uma classe como abstract, ela não poderá mais ser instanciada diretamente
// passando a servir somente para passar suas características por herança

export abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida > 0 ? this.vida : 0} de vida\n`);
  }

  abstract bordao(): void; // os métodos abstracts não podem possuir bloco
  // ao definir dessa maneira, significa que todos filhos ou subclasses precisam ter esse método definido
}

class Guerreiro extends Personagem {
  bordao(): void {
    console.log('ATAQUE PESADO QUE NEM SUA MÃE');
  }
}

class Monstro extends Personagem {
  bordao(): void {
    console.log('Grhhh');
  }
}

const guerreiro = new Guerreiro('Guerreiro', 100, 1000);
const monstro = new Monstro('Monstro', 90, 1000);

guerreiro.atacar(monstro);
guerreiro.atacar(monstro);

monstro.atacar(guerreiro);
guerreiro.atacar(monstro);

monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
