/*
Call e apply são usados para chamar a função.

*/

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.1,
    getPreco
}

//Contexto global na variável para getPreco conseguir ser invocada sem erro.
global.preco = 20
global.desc = 0.1
console.log(getPreco())


//Excutando getPreco na variável produto
console.log(produto.getPreco())


//chamando a função com call e apply
const carro = { preco: 49990, desc: 0.2}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//no call primeiro se passa o contexto que será passado para a função
//também pode passar parâmetros para essa função
console.log(getPreco.call(carro, 0.17, '$'))

//no apply os parâmetros temos que passar os parâmetros dentro de um array
console.log(getPreco.apply(carro, [0.17, '$']))