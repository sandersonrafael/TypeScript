type MeuTipo = number;

const arrayNumeros: Array<number | string> = ['1', 2, '3', 4, '5', 6, '7'];
console.log(arrayNumeros);

// retorna uma Promise<algumacoisa>
async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<MeuTipo> /* vai retornar number pois MeuTipo é number */ {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado));
minhaPromise().then((resultado) => console.log(resultado));
