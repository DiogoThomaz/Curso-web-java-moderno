const alunos = [
    { nome: 'Maria', nota: 8, bolsa: true},
    { nome: 'Diogo', nota: 4.3, bolsa: true},
    { nome: 'Mario', nota: 7.5, bolsa: false},
    { nome: 'Marta', nota: 9.5, bolsa: true},
    { nome: 'Jonas', nota: 5.5, bolsa: true},
]

// desafio: todos os alunos são bolsista?

// expressão que passa resultado e bolsista como param e retorna se eles forem verdadeiros
const todosBolsistas = (resultado, bolsa) => resultado && bolsa
console.log(alunos.map(a => a.bolsa).reduce(todosBolsistas))