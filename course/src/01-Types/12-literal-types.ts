let x = 10 // eslint-disable-line
x = 0b1010;

const y = 100;

// y é subtipo de number, pois só pode possuir o valor 100 e não qualquer number;
// ou seja, o valor em si se torna um "tipo". Quer dizer que y tem tipo/subtipo de 100 (number)

// outros modos de declarar subtipos

// let a: 100 = 100; // eslint-disable-line
// a = 101;

// let b =  100 as const; // eslint-disable-line
// b = 101;

// o tipo/subtipo de pessoa.nome =  Rafael e não string, enquanto sobrenome é string inferido autom.

const pessoa = {
  nome: 'Rafael' as const,
  sobrenome: 'Cunha',
};

// os tipos de cor só podem ser 'Vermelho', 'Amarelo' ou 'Azul' (tipos literais ou subtipos)

function escolhaDeCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

export default 1;

console.log(x, y, /* a, b,  */ pessoa, escolhaDeCor('Vermelho'));
