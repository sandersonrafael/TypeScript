/* eslint-disable */
let nome: string = 'Rafael';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// arrays
let arrayOfNumbers: Array<number> = [1, 2, 3]
let arrayOfNumbers2: number[] = [1, 2, 3]

let arrayOfStrings: Array<string> = ['a', 'b']
let arrayOfStrings2: string[] = ['a', 'b']

// objects
let pessoa: {nome:string, idade: number, adulto?: boolean} = { // ? significa que pode não estar contido no obj
    idade: 30,
    nome: 'Rafael',
    adulto: true,
}
console.log(pessoa.nome)

// functions
function soma(x: number, y: number): number { //function expression
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y; // arrow function
