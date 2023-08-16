// nesse contexto, extends significa que K só pode ser uma chave de O
// ou seja, extends dentro de generics <> repreesnta uma restrição ou garantia de que o tipo será algo
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Branco',
  vacinas: ['Vacina 1', 'Vacina 2', ' Vacina 3'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor);
