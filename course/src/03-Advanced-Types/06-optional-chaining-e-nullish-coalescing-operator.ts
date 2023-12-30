// Encadeamento opcional e operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Título',
  texto: 'Texto...',
  // data: new Date(),
};

// notação ?. para verificar e retornar undefined se a propriedade não existir
// ?? para caso o valor anterior represente undefined ou null, dá um valor "padrão"
console.log(documento.data?.toDateString() ?? new Date());
