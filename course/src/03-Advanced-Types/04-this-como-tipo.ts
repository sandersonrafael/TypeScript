export class Calculadora {
  constructor(public numero: number) {}

  add(numero: number): this {
    this.numero += numero;
    return this;
  }

  sub(numero: number): this {
    this.numero -= numero;
    return this;
  }

  div(numero: number): this {
    this.numero /= numero;
    return this;
  }

  mul(numero: number): this {
    this.numero *= numero;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(numero: number): this {
    this.numero **= numero;
    return this;
  }
}

const calculadora = new Calculadora(10);

// como cada class retorna um this (a própria calculadora), pode-se adicionar notações . sequenciais
// pois calculadora.add(5) é igual à calculadora, porém com o valor "numero" alterado
calculadora.add(5).mul(2).div(2).sub(5); // -> retorna ao valor inicial
console.log(calculadora);

const subCalculadora = new SubCalculadora(10);
subCalculadora.add(5).mul(2).div(2).sub(5).pow(2);
console.log(subCalculadora);
