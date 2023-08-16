// a função se comporte de maneira diferente, dependendo dos parâmetros ou tipos
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((sum, arg) => sum + arg, 0) + x + (y || 0);
  return y !== null && y !== undefined ? x + y : x;
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 5));
