// Declaration Merging
// se o usuário tiver 2 ou mais interfaces iguais, elas fazem merge
// resultando numa só interface com todas as propriedades de cada uma

interface Pessoa {
  nome: string;
}

interface Pessoa {
  // é possível se utilizar o readonly em interfaces
  readonly sobrenome: string;
}

interface Pessoa {
  // é possível declarar como readonly no lado do array também. Métodos não funcionam
  readonly comidasFavoritas: readonly string[];
}

interface Pessoa {
  // atributos opcionais
  readonly idade?: number;
}

// vai exigir ambas propriedades
export const pessoa: Pessoa = {
  nome: 'Fulano',
  sobrenome: 'de Tal',
  comidasFavoritas: ['Água', 'Sanduíche', 'Maçã'],
  idade: 25,
};

console.log(pessoa.nome);
pessoa.nome = 'Novo Fulano';
console.log(pessoa.nome);

// pessoa.sobrenome = 'ok'; -> apresenta erro pois é readonly
// pessoa.comidasFavoritas.push('Pêra'); -> apresenta erro pois até o array é readonly
// pessoa.idade = 26; -> irá apresentar erro
