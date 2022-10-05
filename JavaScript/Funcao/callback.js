const fabricantes = ["Mercedes", "Audi", "BMW"]


//Assinatura para função forEach
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}


//Função CallBack
fabricantes.forEach(imprimir)

//Esse parâmetro por padrão recebe todos os elementos do array fabricantes
//Poderia ter escrito qualquer coisa no lugar de fabricante
fabricantes.forEach(fabricante => console.log(fabricante))
