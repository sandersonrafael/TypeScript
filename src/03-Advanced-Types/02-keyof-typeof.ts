// no TypeScript, existe um typeof específico, diferente do typeof comum do javascript
// o typeof do TypeScript permite inferir um objeto já definido como tipo de outro obj. Ex:

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

// o type terá seu tipo inferido como o mesmo tipo que coresObj
type CoresObj = typeof coresObj;

// já o keyof permite retirar diretamente as chaves de um objeto como sendo tipos
type CoresPossiveis = keyof CoresObj; // resultará: 'vermelho' | 'verde' | 'azul'

function traduzirCor(cor: CoresPossiveis, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('roxo', coresObj));
