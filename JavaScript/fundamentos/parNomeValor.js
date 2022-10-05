const saudacao = 'Ola'

function ex() {
    const saudacao = 'Ola funcao'
    return saudacao
}
// Objetos são grupos aninhados de pares/nome valor
const cliente = {
    nome: 'Pedro',
    idade: '32',
    endereco: {
        logradouro: 'Rua muito legal',
        numero: '123'
    }
}

console.log(saudacao)
console.log(ex())
console.log(cliente)