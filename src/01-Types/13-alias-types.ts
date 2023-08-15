// funciona como um "apelido" de um tipo personalizado. Ex:

type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Black';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 32,
  nome: 'Fulano',
  salario: 6000,
};

export function setCorPreferida(pessoa: Pessoa, corPreferida: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida };
}

console.log(setCorPreferida(pessoa, 'Amarelo'));
