const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// o Type Alias pode receber um "parâmetro" com o tipo genérico de quem o chama, como <U> que recebe <T>:
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

// para tornar genérico, usa-se a notação <ALGUMACOISA> após a definição Normalmente começa com T. Ex:
export function filter<T>(array: T[], callback: FilterCallback<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) novoArray.push(array[i]);
  }

  return novoArray;
}

const filterOriginal = array.filter((value) => value <= 5);
console.log(filterOriginal);

const filterPersonalizado = filter(array, (value) => value > 5);
console.log(filterPersonalizado);
