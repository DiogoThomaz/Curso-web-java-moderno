/* Função recebe entradas e retorna algo ou não
Trecho de código agrupado por bloco
Função também pode não receber algo e retornar ou não 
*/

/// Função sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2, 3)  // a=2 e b=3
imprimirSoma(2)   //Neste caso o segundo valor é Undefined
imprimirSoma(2, 3, 4, 5) //A linguagem não faz nada com o 4, 5, declara eles como Undefined



/// Função com retorno
function soma(a, b = 7 ){
    return a + b
}
soma(2, 9)
console.log(soma(10, 3))
console.log(soma(11))
console.log(soma())
