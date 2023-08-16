// um objeto possui outro objeto como parte dele, por dentro
// Se a classe "maior" deixa de existir, a menor deixa de existir também

// Ex: o motor faz parte do carro || Ex2: o coração é parte de uma pessoa

// a classe é chamado na própria declaração da outra classe
export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }
  acelerar(): void {
    this.motor.acelerar();
  }
  frear(): void {
    this.motor.frear();
  }
  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado.');
  }
  acelerar(): void {
    console.log('Motor está acelerando.');
  }
  frear(): void {
    console.log('Motor está freando.');
  }
  desligar(): void {
    console.log('Motor está desligado.');
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.frear();
carro.desligar();
