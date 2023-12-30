// Condicional -> Recomendado
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertions (!) -> Não recomendado
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion -> Recomendado
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement -> digitar HTML e usar o autoComplete -> Recomendado
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// caso de exceção, para situações não esperadas que precisa
// forçar um tipo em algo que não possui
const body4 = document.querySelector('body') as unknown as number;
body4;
