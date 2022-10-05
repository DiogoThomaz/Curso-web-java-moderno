// Recurso do ES2015
// Retira dados do objeto

const pessoa = {
    nome: 'Ana',
    idade: 5
}

//Tira os atributos nome e idade do objeto pessoa
const {nome, idade} = pessoa
console.log(nome, idade)

//Tira os atributos nome e idade do objeto pessoa e cria uma variável para armazenar, chamada n e i.
const {nome: n, idade: i} = pessoa
console.log(n, i)

//Se não tiver nada a variável bem humarada recebe true.
const {sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)