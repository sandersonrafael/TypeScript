// type guard trata-se de uma checagem de tipo ao executar por exemplo uma função,
// onde primeiro verifica-se se o tipo é o esperado e se sim, retorna algo

// a maneira mais comum de type guard é o typeof
export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('1', '5'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa {
  readonly tipo = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome); -> um método para type guard é o ('chave' in objeto)
  // if (obj instanceof Aluno) console.log(obj.nome); -> outra maneira é o instanceof para alguma classe
  // um terceiro método é inserindo o tipo literal no type específico, como:
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      break;
    case 'animal':
      console.log(obj.cor);
      break;
  }
}

mostraNome(new Aluno('João'));
mostraNome({ tipo: 'animal', cor: 'Verde' });
