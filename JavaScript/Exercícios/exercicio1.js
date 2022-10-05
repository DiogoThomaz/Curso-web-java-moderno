function comprimentar(nome) {
    console.log('Olá ', nome)
}

comprimentar('Diogo')

function conversorIdade(idade) {
    idade *= 365
    console.log('A conversão de idade em dias é:', idade) 
}

conversorIdade(28)


function salario(pagamentoHora, horasTrabalhadas) {
    salarioMensal = pagamentoHora*horasTrabalhadas
    console.log('O Salário mensal para a quantidade de horas trabalhadas é: R$',salarioMensal)
}


salario(50,100)

        
function gerarMatriz(a11, a12, a13, a21, a22, a23, a31, a32, a33) {
    matriz = [
        [a11, a12, a13],
        [a21, a22, a23],
        [a31, a32, a33],
    ]

    console.log(matriz)
    return matriz
}

var mat1 = gerarMatriz(0,1,1,2,3,4,1,1,1)
