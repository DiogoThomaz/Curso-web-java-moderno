/* SEGUNDO EXEMPLO DE FOREACH  */

/* Simulando o método foreach2
Acessando uma protótipo do array, acessando a propriedade forEach2
e como ele é undefined, crio um valor para ela, neste caso uma função que recebe o parâmetro callback
Em seguida, crio um laço for que recebe uma varíavel i já declarada dentro da função com escopo let
digo que o laço ocorrerá até que seja menor que o tamanho do array.
para isso acesso a proriedade tamanho usando this.length

Por fim, digo que meu parâmetro callback é uma função que recebe os paramtros
indicie, interador e ele proprio*/
Array.prototype.forEach2 =  function(callback) {
    for(let i=0; i<this.length; i++) {
        callback(this[i], i, this)   
    }
}

const aprovados = ['Agatha', 'Diogo', 'Daniel', 'Maria']
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)})
