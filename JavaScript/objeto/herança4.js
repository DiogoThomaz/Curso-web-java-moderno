
// criando função construtora de objeto
function MeuObjeto () {}
// criando objetos a partir da função construtora
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
// O prototype do obj1 é igual ao prototype do obj2?
// resp: Sim, pois os dois apontam para o mesmo protótipo de Meu Objeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj2.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () { console.log(`Meu nome é ${this.nome}!`)}

obj1.falar()
obj2.nome = 'Diogo'
obj2.falar()


// Criando o obj3 de outra forma
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.falar()



//RESUMINDO A BAGUNÇA

//O protótipo do meu novo objeto é igual ao protótipo do meuobjeto? sim
/*Explicação: O novo objeto criado a partir do MeuObjeto herda seus atributos */
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)

//O protótipo do meuobjeto(criadao a partir da função construtora) é igual ao protótipo da função protótipo? sim
/*Explicação: Como o meuObjeto é criado a partir de uma função construtora, ele tem como herança o 
protótipo das funções  */
console.log(MeuObjeto.__proto__ === Function.prototype)

//O protótipo do protótipo da função é protótipo do objeto? Sim
/* Como tudo em javascript é um objeto, a função herda o protótipo de objeto */
console.log(Function.prototype.__proto__ === Object.prototype)

//O protótipo do protótipo do objeto é nulo? Sim
/*O objeto não herda protótipo de ninguém pois ele é o pai de todos em javascript   */
console.log(Object.prototype.__proto__ === null)
