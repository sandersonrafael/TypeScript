// uma classe precisa de outra para funcionar corretamente
// como o carrinho de compras que precisa de produtos

export class CarrinoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Array<Produto>): void {
    for (const produto of produtos) this.produtos.push(produto);
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  totalCarrinho(): number {
    const soma = this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    return Number(soma.toFixed(2));
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto('Camiseta', 49.95);
const produto2 = new Produto('Camiseta Polo', 79.93);
const produto3 = new Produto('Camise Regata', 39.91);

const carrinhoDeCompras = new CarrinoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras.totalCarrinho());
