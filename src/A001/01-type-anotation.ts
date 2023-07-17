/* eslint-disable */

// o typescript infere automaticamente os tipos que são óbvios, como:

// Tipos básicos

let nome: string = 'Rafael'; // Qualquer tipo de string, '', ``, ""
let idade: number = 26; //  10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; //
let simbolo: symbol = Symbol('qualquer símbolo'); //
// let big: bigint = 10n; //

// Arrays

let arrayOfNumbers: Array<number> = [1, 2, 3]; // ou ->
let anotherArrayOfNumbers: number[] = [1, 2, 3];

let arrayOfStrings: Array<string> = ['1', '2', '3']; // ou ->
let anotherArrayOfStrings: string[] = ['1', '2', '3'];

// Objects

let pessoa: {
  nome: string,
  idade: number,
  adulto?: boolean, // ? indica que é uma notação opcional
} = {
  nome: 'Rafael',
  idade: 26,
  adulto: true,
};

// Functions

function sum(x: number, y: number)/*: number */ { // retorno é opcional, pois o ts infere
  return x + y;
}
const result = sum(2, 2);
