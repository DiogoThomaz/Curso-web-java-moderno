/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

function eq2grau(ax2,bx,c) {
    const raiz1 = bx**2 + (2*ax2*c)**(1/2)
    const raiz2 = bx**2 - (2*ax2*c)**(1/2)

    console.log(`As raízes são ${raiz1} e ${raiz2}`)

    if(raiz1 === raiz1){
        console.log('As raízes são iguais, delta negativo')
    }
}

