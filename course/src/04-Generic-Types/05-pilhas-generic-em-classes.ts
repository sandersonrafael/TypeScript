export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

// tipos são inferidos automaticamente devido ao generic
const pessoa1 = new Pessoa('Fulaninho', 15);
const pessoa2 = new Pessoa(['Ciclaninho'], 14);
const pessoa3 = new Pessoa(['Ciuliano'], { idade: 16 });
const pessoa4 = new Pessoa<string, number>('Fiuliano', 14);
console.log({ pessoa1, pessoa2, pessoa3, pessoa4 });

// pilhas -> similares a pilhas de livros, onde sempre se adiciona em cima e quando se remove, é
// a partir dos últimos adicionados

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.estaVazia()) return;
    this.contador--;

    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) console.log(this.elementos[chave]);
  }
}

const pilha = new Pilha<number>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);

pilha.mostrarPilha();

while (!pilha.estaVazia()) {
  pilha.pop();
}

pilha.mostrarPilha(); // não exibe nada
