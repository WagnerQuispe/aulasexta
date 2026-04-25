let produtos = [
  { nome: 'Teclado', preco: 100, estoque: 10 },
  { nome: 'Mouse', preco: 50, estoque: 30 },
  { nome: 'Monitor', preco: 800, estoque: 5 },
  { nome: 'Notebook', preco: 3000, estoque: 8 },
  { nome: 'Celular', preco: 1500, estoque: 15 },
  { nome: 'Tablet', preco: 900, estoque: 12 },
  { nome: 'Fone', preco: 200, estoque: 25 },
  { nome: 'Carregador', preco: 80, estoque: 40 },
  { nome: 'HD', preco: 400, estoque: 18 },
  { nome: 'SSD', preco: 500, estoque: 22 }
];

// A
console.log("Preço do segundo:", produtos[1].preco);

// B
console.log("Nome do terceiro:", produtos[2].nome);

// C
console.log("Total de itens:", produtos.length);

// D
console.log("Nomes:");
for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome);
}

// E
let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque;
}
console.log("Total de estoque:", totalEstoque);

// F
let maior = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maior.estoque) {
    maior = produtos[i];
  }
}

console.log("Maior estoque:", maior);