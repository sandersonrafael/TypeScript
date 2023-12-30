// diferente do tipo herança, que o extends "é um", as associações são do tipo "tem um"
// os objetos não dependem um do outro

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (!this.ferramenta) {
      console.log('Não posso escrever sem ferramentas...');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaDeEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Luandra');
const caneta = new Caneta('Colorida');
const maquinaVelha = new MaquinaDeEscrever('Máquina Velha');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquinaVelha.nome);
escritor.escrever();

escritor.ferramenta = caneta;
escritor.escrever();

escritor.ferramenta = maquinaVelha;
escritor.escrever();
