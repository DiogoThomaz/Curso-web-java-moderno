function Aula(nome, videoId) {
    this.nome = nome,
    this.videoId = videoId
}

const Aula1 = new Aula ('Bem bindo', 13)
const Aula2 = new Aula ('Até breve', 15)

console.log(Aula1, Aula2)


//simulando o new
/*explicação: f --> função, ... --> "Expred, Hashe ???" conjunto, um array chamado params  
apply() --> dizendo o contexto da função objeto */
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const Aula3 = novo(Aula, 'aula legal', 123)
const Aula4 = novo(Aula, 'aula chata', 579)

console.log(Aula3, Aula4)