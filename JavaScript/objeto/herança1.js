/* Aula herança:
A herança em javascript relaciona um objeto pai a um objeto filho através da propriedade prototype.
Um objeto filho busca */

const ferrari = {
    modelo: 'F40',
    VelMax: 324
}

const volvo = {
    modelo: 'V40',
    VelMax: 200
}



console.log(ferrari.__proto__) //Mostrando que prototipo é um objeto
console.log(ferrari.__proto__ === Object.prototype) // É true porque ele é um prototipo
console.log(volvo.__proto__ === Object.prototype) // É true porque ele é um prototipo
console.log(Object.prototype.__proto__) //Prototipo não tem um protótipo por isso ele é nulo
console.log(Object.prototype.__proto__ === null) //Prototipo não tem um protótipo por isso ele é nulo

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)