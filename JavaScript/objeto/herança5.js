// String, Array e Object tem um atributo chamado prototype 
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

/* PODEMOS GERAR ATRIBUTOS E FUNÇÕES */

// Exemplo 1
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Diogo'.reverse())

// Exemplo 2
Array.prototype.first = function () {
    return this[0]
}
console.log([1,2,3,4].first())

