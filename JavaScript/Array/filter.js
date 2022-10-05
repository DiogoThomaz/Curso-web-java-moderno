/* Usado somente para filtar um array de elementos. 
transformando um array em outro */

const alunos = [
    { nome: 'Maria', nota: 8, bolsa: true},
    { nome: 'Diogo', nota: 4.3, bolsa: true},
    { nome: 'Mario', nota: 7.5, bolsa: false},
    { nome: 'Marta', nota: 9.5, bolsa: true},
    { nome: 'Jonas', nota: 5.5, bolsa: true},
]


/* Filtrando elementos a partir das notas
retorna todos os elementos com a nota maior que 7.
Esse array tem um retorno do tipo verdadeiro ou falso, 
só retorna se for verdadeiro. */
console.log(alunos.filter(function(p) {
    return p.nota > 7
}))

/*  o array alunos recebe um arrow function que acessa o indicie bolsa
e armazena em um constante- */
const bolsista = alunos => alunos.bolsa 
const notaBoa = alunos => alunos.nota > 6
const nomesDosAlunos = alunos => alunos.nome

console.log(alunos.filter(notaBoa).filter(bolsista))
console.log(alunos.filter(nomesDosAlunos))