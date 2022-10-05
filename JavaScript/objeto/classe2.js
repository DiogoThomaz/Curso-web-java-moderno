/*FORMA DE SE TRABALHAR COM HERANÇAS EM CLASSES É DIFERENTE

EXTENDS: quer dizer que a classe tem sua herança de outra
SUPER: Passado entre paranteses, referenciando o herdado*/

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'professor')  {
        super(sobrenome)
        this.profissao = profissao
    }
}
class Filho extends Pai {
    constructor()  {
        super('silva')
    }
}

const filho = new Filho
console.log(filho)