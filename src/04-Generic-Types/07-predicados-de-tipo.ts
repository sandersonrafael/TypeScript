// é possível e interessante também criar funções que checam tipos

// desta maneira, o typescript não consegue ler, pois é limitado ao escopo da função a análise ->
// export const isNumber = (value: unknown): boolean => typeof value === 'number';

// uma alternativa é setar o resultado como is type, ou seja, se der true, o type é aceito
export const isNumber = (value: unknown): value is number => typeof value === 'number';

console.log(isNumber('123'));
console.log(isNumber(123));
console.log(isNumber(Number('123')));

// ex de uso:

export const soma = <T>(...args: T[]): number | null => {
  return args.reduce((sum, value) => {
    return sum + (isNumber(value) ? value : 0);
  }, 0);
};

console.log(soma(1, 2, 3));
