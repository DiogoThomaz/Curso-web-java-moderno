/* TRABLAHANDO COM ARRAYS */
// um array em javascript é um objeto
/* É uma boa prática trabalhar com dados homogenios dentro do array */
console.log(typeof Array, typeof new Array, typeof [])

//
let aprovados = new Array('Maria', 'Diogo', 'Carlos')
console.log(aprovados)

//notação comum para criar aray
aprovados = ['Maria', 'Diogo', 'Carlos']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // --> ele está undefined porque não existe

/* forma mais comum de substituir um valor dentro de um array 
index da posição e sobreescrever o valor*/
aprovados[3] = 'Marcos'
console.log(aprovados[3])

/* forma de adicionar um elemento no final de um array
comando .push()  */
aprovados.push('Fernando')
console.log(`O elemento da posição 4 é ${aprovados[4]}`)

/* saber o tamanho do array */
console.log(`Tamanho do arary ${aprovados.length}`)

/* pode adicionar um elemento em uma posição e o intervalo vazio será undefined */
aprovados[9] = 'Moreno'
console.log(`Tamanho do Array ${aprovados.length}`)
console.log(`O elemento da posição 9 é: ${aprovados[9]}`)
console.log(aprovados[8] === undefined, aprovados[5] === undefined )  // --> os elementos entre a posição 5 e 8 são undefined

/* função sort reorganiza os elementos do array */
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

/* os elementos do array podem ser excluidos como os de objetos
 após exlcuir o elemento ele não é reorganizado, o espaço que ele ocupava fica como
 um elemento vazio
 
 delete --> comando para deletar */
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados)


/* FUNÇÃO SPLICE
A função splice serve para remover elementos de um array e/ou adicionar */
aprovados = ['Bia', 'Carlos', 'Ana' ]
/*Exemplo de exclusão, a partir do indicie 1(Carlos), ele excluirá apenas um elemento  */
aprovados.splice(1,1)
console.log(aprovados)

/*Exemplo de exclusão com adição de elementos, a partir do indicie 1(Carlos), ele excluirá apenas um elemento
Explicação na posição 1 para frente a função excluiu 2 elementos: Carlos e Ana, e em seguida adicionou 2 elementos  */
aprovados = ['Bia', 'Carlos', 'Ana' ]
aprovados.splice(1,2, 'Elemento1', 'Elemento2')
console.log(aprovados)