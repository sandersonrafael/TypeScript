let x: unknown; // funciona como um any mas ele dá mais atenão ao uso das variáveis. Ex:
x = 'fulano';
x = true;
x = '900';
x = 100;
const y = 200;

// se não houver checagem de tipo, apresenta erro e não deixa executar
console.log(typeof x === 'number' ? x + y : 'ok');
