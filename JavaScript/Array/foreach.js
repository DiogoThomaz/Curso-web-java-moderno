const aprovados = ['Agatha', 'Diogo', 'Daniel', 'Maria']


/*  EXPLICAÇAO DO FOREACH

Neste caso a função percorre o array, e para cada elemento encontrado
ela retorna primeiro a infomação do elemento e o indicie da posição
***Repare que os nomes dos parâmetros das funções podem ser qualquer coisa,
desde que eu me lembre que a ordem é: Elemento, posicão do indicíe */
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)})


/* EXEMPLO DA MESMA FUNÇÃO COM UM ARROW FUNCTION   */
aprovados.forEach( nome => console.log(nome))


/* EXEMPLO ARMAZENANDO O ARRAY EM UMA CONSTANTE  
Armazenei a função na variável aprovados
em seguida fiz o foreach chamando a função que esta na variável */
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

/* A FUNÇÃO CALLBACK DO FOREACH RECEBE 3 PARÂMETROS:
1. ELEMENTO
2. INDICIE
3. ARRAY  */