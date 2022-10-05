const alunos = [
    { nome: 'joão', nota: 8},
    { nome: 'maria', nota: 9}
]

//imperativo
let total1 = 0
for ( let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota // <-- observar que essa variável foi declarada antes, por conta do escopo
    console.log('Nota: ', (total1 / alunos.length), ' iteração: ', i) 
}

//declarativa
const notasAlunos = alunos => alunos.nota // arrow function que gera as notas dos alunos
const somarNotas = (atual, total) => atual + total //arrow function que soma duas notas
const total2 = alunos.map(notasAlunos).reduce(somarNotas) //criando um array total2
console.log('A nota média dos alunos é: ', (total2/alunos.length))