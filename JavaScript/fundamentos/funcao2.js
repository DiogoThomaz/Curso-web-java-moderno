//Armazenando função em variável ou constante
const imprimirSoma = function(a,b) {
    console.log(a+b)
    }

imprimirSoma(2,3)

// Armazenando uma função arrow em uma varíavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(5,3))

// Retorno implícito arrow function || Retorna a-b
const subtracao = (a, b) => a - b
console.log(subtracao(10, 11))