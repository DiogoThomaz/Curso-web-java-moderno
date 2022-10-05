//Classe Pessoa
class Pessoa {
    constructor (nome){
        this.nome = nome
    }
    //Método falar.
    falar() {
        console.log(`Meu nome é ${this.nome}`)}
}

//instância nova pessoa
const p1 = new Pessoa('Diogo')
p1.falar()