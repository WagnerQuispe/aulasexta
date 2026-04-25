let produto = {
  nome: 'Camisa',
  cor: 'Preta',
  preco: 49.90,
  estoque: 50
};

// A
console.log("Nome:", produto.nome);

// B
console.log("Preço:", produto['preco']);

// C
produto.estoque = 80;

// D
console.log("Objeto completo:");
console.log(produto);