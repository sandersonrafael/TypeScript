type Veiculo = {
  marca: string;
  ano: string;
};

// utilizando o tipo Veiculo com a chave relacionada em notação de string
type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: '2020',
  name: 'S 25',
};

console.log(carro);
