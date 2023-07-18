const objectA: {
  keyA: string;
  readonly keyB: string;
  keyC?: string;
  [key: string]: unknown; // chaves podem ou não existir, possuindo o unknow
} = {
  keyA: 'ValueA',
  keyB: 'ValueB',
};

objectA.keyA = 'ValueJ';
// objectA.keyB = 'new ValueB'; // -> erro devido ao readonly
objectA.keyC = 'ValueC';
