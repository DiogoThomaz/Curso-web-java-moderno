const escola = "Cod3r"

console.log(escola.charAt(4)) //imprime somente o caracter 3
console.log(escola.charAt(5))

console.log(escola.substring(1)) //imprime a partir de, ou em intervalos
console.log(escola.substring(0,3))

console.log("Escola".concat(escola).concat("!")) /* concatenação
da escola valor literal com escola constante com a string !*/

console.log(escola.replace(3, "e")) // Troca o 3 por e


console.log("Ana, Maria, Pedro".split(",")) // Gerando um array