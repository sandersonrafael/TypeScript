// Array<T> or T[]
function multiplyArgs(...args: Array<number>) {
  return args.reduce((accumulator, value) => accumulator * value, 1);
}

console.log(multiplyArgs(1, 2, 3, 4, 5, 6));

function concatStrings(...args: string[]) {
  return args.reduce((accumulator, string) => accumulator + string);
}

console.log(concatStrings('ok ', 'meu querido', ' e', ' prezado ', 'amigo.'));
