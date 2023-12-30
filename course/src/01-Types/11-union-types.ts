// quando o item pode possuir mais de um tipo, usamos a sintaxe: (tipo1 | tipo2 | ...)
function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 30));
console.log(addOrConcat('10', '30'));
console.log(addOrConcat(10, '30'));
console.log(addOrConcat('10', 30));
