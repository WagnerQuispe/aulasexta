let frutas = [
  'Maçã', 'Banana', 'Laranja', 'Uva', 'Pera',
  'Abacaxi', 'Manga', 'Melancia', 'Kiwi', 'Morango',
  'Limão', 'Cereja', 'Pêssego', 'Ameixa', 'Goiaba',
  'Maracujá', 'Coco', 'Mamão', 'Figo', 'Framboesa',
  'Pitaya'
];

// A
console.log("Posição 0:", frutas[0]);
console.log("Posição 7:", frutas[7]);
console.log("Posição 11:", frutas[11]);
console.log("Posição 15:", frutas[15]);
console.log("Posição 18:", frutas[18]);
console.log("Posição 20:", frutas[20]);

// B
console.log("Penúltimo:", frutas[frutas.length - 2]);
console.log("Último:", frutas[frutas.length - 1]);

// C
console.log("Total de elementos:", frutas.length);

// D
frutas.push("Carambola");
console.log("Novo array:", frutas);

// E
console.log("Todos os elementos:");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}