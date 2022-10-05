/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/


function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicação) {
    const montante = capitalInicial*(tempoDeAplicação * taxaDeJuros) + (capitalInicial)
    console.log(montante)
}
function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicação) {
    const montante2 = (capitalInicial*(1+taxaDeJuros)**(tempoDeAplicação)).toFixed(2)
    console.log(montante2)
}

jurosSimples(300,0.15,2)
jurosCompostos(300,0.15,2)