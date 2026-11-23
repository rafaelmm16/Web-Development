function mapNotas(notas, funcao) {
  const notasMapeadas = notas.map((nota) => funcao(nota));
  return notasMapeadas;
}

const notas = [10, 9, 8, 7, 6];

const notasMapeadas = mapNotas(notas, (nota) => nota * 2);

console.log(notasMapeadas); // [20, 18, 16, 14, 12]

const notas = [
  { nota: 10, materia: "Matemática" },
  { nota: 9, materia: "História" },
  { nota: 8, materia: "Português" },
  { nota: 7, materia: "Ciências" },
  { nota: 6, materia: "Inglês" },
];

const notasMapeadas = mapNotas(notas, (nota) => ({
  nota: nota.nota * 2,
  materia: nota.materia,
}));

console.log(notasMapeadas); // [
//   { nota: 20, materia: "Matemática" },
//   { nota: 18, materia: "História" },
//   { nota: 16, materia: "Português" },
//   { nota: 14, materia: "Ciências" },
//   { nota: 12, materia: "Inglês" },
// ]
