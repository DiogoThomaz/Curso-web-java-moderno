function tratarErro(erro) {
    throw { 
        name: erro.name
    }
}

function imprimirNome(obj) {
    try {
        console.log(obj.nome.toUpperCase())
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('final')
    }
}

const nome1 = new imprimirNome('diogo')
console.log(nome1)