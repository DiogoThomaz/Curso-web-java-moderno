/* JSON É UM OBJETO DE INFORMAÇÕES
Portanto, ele não carrega funções e etc... Apenas carrega texto, não carrega execuções.

O json serve para comunicar tecnologias diferentes, pois ele carrega apenas textos,
por isso todas as linguagens conseguem ler as informações do JSON.

Interessante para armazenar informações internas de um programa.*/


/* CONVERTENDO UM OBJETO PARA JSON  */
const obj = {a:1, b:2, soma() {return a + b}}
console.log(JSON.stringify(obj))

/* CONVERTENDO UM JSON PARA OBJETO */
/* OBS: 1. As chaves do SON tem que ter aspas dupla
        2. Strings tem que ter aspas duplas também
        3. Um json pode receber um objeto ou um array também. */
console.log(JSON.parse('{ "a":1, "b":2, "c":3}'))


/* DICAS INTERESSANTES: */
/* https://jsonlint.com --> site que verifica se um json é valido
   https://json5.org --> tentativa de ampliar as funcionalidades do json */