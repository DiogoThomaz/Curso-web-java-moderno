let compareComThis = function(param) {
    console.log(this === param)
}

compareComThis(global)

const soma = function(x,y) {
    return x + y
}

/* Se não passar nenhum parâmetro para a operação dessa função ela recebe a função soma*/
const imprimirResultado = function(a,b, operacao=soma) {
    console.log(operacao(a,b))
}

imprimirResultado(5,5)
imprimirResultado(5,5, (x,y) => x*y )