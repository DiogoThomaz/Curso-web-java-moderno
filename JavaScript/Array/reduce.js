/* REDUCE

Função que serve para transformar o array em outras coisas

Existe um parâmetro que é acumulado a cada intereção*/

const alunos = [
    { nome: 'Maria', nota: 8, bolsa: true},
    { nome: 'Diogo', nota: 4.3, bolsa: true},
    { nome: 'Mario', nota: 7.5, bolsa: false},
    { nome: 'Marta', nota: 9.5, bolsa: true},
    { nome: 'Jonas', nota: 5.5, bolsa: true},
]

const resultado = alunos.map( a => a.nota).reduce(function(acumulador, atual ) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)