// Record -> Trata-se de um tipo que o usuário informa o tipo de chave e o tipo de valor de um objeto
export const objeto1: Record<string, string | number> = {
  nome: 'João',
  sobrenome: 'Silva',
  idade: 30,
  '2023': 'Ano ruim para vagas',
};

type Pessoa = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required -> independente de o "molde" possuir propriedades opcionais, todas são exigidas no novo type
export type PessoaRequired = Required<Pessoa>;

// Partial -> oposto do required. Todas propriedades se tornam opcionais
export type PessoaPartial = Partial<PessoaRequired>;

// Readonly -> nada no objeto pode ser modificado
export type PessoaReadonly = Readonly<PessoaRequired>;

// Pick -> permite escolher quais chaves se deseja do tipo
// -> necessário informar como parâmetros o type "pai" e suas chaves necessárias em strings com union |
export type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// Exclude -> retorna todos os tipos que estão no primeiro argumento mas não no segundo
export type ABCDEExclude = Exclude<ABC, CDE>; // -> retorna A e B, pois C está no segundo tipo

// Extract -> oposto ao Exclude, retorna somente os tipos do primeiro argumento que estão no segundo
export type ABCDEExtract = Extract<ABC, CDE>; // -> somente C se repete de ABC para CDE
