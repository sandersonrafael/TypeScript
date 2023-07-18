// Array<T> or T[]
function multiplyArgs(...args: Array<number>) {
  return args.reduce((accumulator, value) => accumulator * value, 1);
}

console.log(multiplyArgs(1, 2, 3, 4, 5, 6));

function concatStrings(...args: string[]) {
  return args.reduce((accumulator, string) => accumulator + string);
}

console.log(concatStrings('ok ', 'meu querido', ' e', ' prezado ', 'amigo.'));

// somente leitura -> arrays que não podem ser editados ou alterados nem com métodos:

const arrayName1: readonly string[] = ['Sanderson', 'Rafael'];
const arrayName2: ReadonlyArray<string> = ['Sanderson', 'Rafael'];

console.log(arrayName1, arrayName2);
