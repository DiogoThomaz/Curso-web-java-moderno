const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: '60kg',
}


/*  RETORNA TODAS AS CHAVES DO OBJECT PESSOA
    keys --> retorna as chaves dos valores
    values --> retorna os valores das chaves
    entries --> retorna todos pares de chave/valor  */
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


/*  Pegando todos os pare de chave valor.
    Lógica: 1.Pegar todos os dados do objeto com a função entries
            2.Usar o forEach com o destructuring para cada elemento do objeto
            3.Imprimir no console com uma arrow function executável usando templete string*/

Object.entries(pessoa).forEach(([chave, valor]) => {console.log(`${chave}: ${valor}`)})
