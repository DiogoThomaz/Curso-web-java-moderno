//Função construtora, tem que receber o parâmetro pessoa.
function Pessoa (nome) {
    this.nome = nome

    //Função anônima que apenas executa
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

//instância nova pessoa
const p1 = new Pessoa('Diogo')
p1.falar()



//Exemplo 2: Função arrow com corpo e método falar.
//Note que neste caso o método não precisa de this.falar para estar definido,
//pois a método tem consciencia que a variável nome está dentro do seu contexto léxico.
//Essa é uma função factory, e se consegue ser mais determinístico com ela.
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
