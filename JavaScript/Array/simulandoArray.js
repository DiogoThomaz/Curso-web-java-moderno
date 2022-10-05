const quaseArray = {0: 'Rafael', 1:'Ana', 2:'Bia'}
console.log(quaseArray)

/*Criando um propriedade que quando escrever quasearray.toString()
é uma função que retorna apenas o valor não numerado  */
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

const meuArray = ['Rafael', 'Ana', 'Bia']

console.log(quaseArray.toString(), meuArray)