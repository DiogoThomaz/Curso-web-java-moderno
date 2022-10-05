/*                   ARRAYS
pop() --> exclui o último elemento de um array
push() --> adiciona um elemento na última posicão do array
shift() --> exclui o último elemento de um array
unshift()--> adiciona um elemento na primeira posição de um array
splice()--> a partir de uma posição, exclui n elementos, e adiciona n elementos
slice()--> a partir de uma posição gera um novo array, e a posição inicial será o elemento zero
*/  

/* A constante referencia que pilotos tem um local na memória do computados fixo,
e por isso não pode ser alterado, porém o array de pilotos pode ser alterados sem problemas.*/
const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
console.log(pilotos)

pilotos.pop() // tirou o último
console.log(pilotos)

pilotos.push('Diogo') // colocou o último
console.log(pilotos)

pilotos.shift() // tirou o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // colocou o primeiro
console.log(pilotos)

/* Adicionando pilotos no meio do array */
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

/* slice
serve para gerar um array a apartir de */
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)
/* pegando um intervalo com inicio e fim  */
const algunsPilotos2 = pilotos.slice(1,3)
console.log(algunsPilotos2)