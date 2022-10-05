
//Criando um array
const valores = [7,7.3,5.3,22]
//retorna o valor da posição 0 e da posição
console.log(valores[0],valores[3])

//inserindo um valor na posição 4
valores[4] = 10
console.log(valores)

//retornar o tamanho do array
console.log(valores.length + " itens") 

//adiciona valores diversos no array
valores.push({id: 3}, false, null, "Teste!")
console.log(valores)

//.pop() Retira o último valor do array, retornando somente ele.
console.log(valores.pop())

//delete retira o determinado elemento do array
delete valores[0]
console.log(valores)

console.log(typeof valores)

