                      // Cadeia de prototipo (prototype chain)
Object.prototype.attr0 = '0'
const avo = { attr1: 'A'} // herda os atributos do objeto prototype por padrão 
// __proto__ diz de quem o objeto vai herdar os atributos
const pai = { __proto__: avo, attr2: 'B', attr3:'W'} // herda os atributos de avo
const filho = { __proto__: pai, attr3: 'C'} // herda os atributos do pai

/* A IDEIA É BUSCAR UMA SÉRIE DE ATRIBUTOS A PARTIR DO OBJETO FILHO
QUE RECEBE HERANÇA DO PAI E DO AVO POR CONSEQUÊNCIA                            */

console.log (filho.attr3)
console.log (filho.attr3, filho.attr2)
console.log (filho.attr3, filho.attr2, filho.attr1)
console.log (filho.attr3, filho.attr2, filho.attr1, filho.attr0)


/* EXISTE O SOMBREAMENTO DE ESCRITA, ISSO É SE UM OBJETO TEM UM MESMO ATRIBUTO QUE O PAI
ELE REESCREVE O ATRIBUTO DO PAI */

console.log(filho.attr3) /*FILHO E PAI TEM UM MESMO OBJETO: ATTR3, POREM NO CONSOLE APARECE O ATTR DO FILHO
                            POIS ELE SOBRESCREVE O DO PAI */



                            /* SEGUNDO EXEMPLO DE SHADOWING    */

//criação do objeto pai carro
const carro = {
    velAtual:0,
    velMax:200,
    //função que acelera o veículo
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    //função que retorna o status da velocidade máxima
    status() {
        return `${this.velAtual} km/h de ${this.velMax}km/h`
    }
}


// criação do objeto ferrari e seus atributos
const ferrari = {
    modelo: 'f40',
    velMax: 324
}

// criação do objto volvo e seus atributos
const volvo = {
    modelo: 'v40',
    status() { /*  Sombreando a função status*/
        return `${this.modelo}: ${super.status()}`  /* super.status() chama a função do objeto carro,
                                                       pois caso o contrátrio o this.status() ficaria
                                                       chamando a função sombreada recursivamente  */
    }
}


Object.setPrototypeOf(ferrari, carro)  /* Função de set ferrari protótipo de carro */
Object.setPrototypeOf(volvo, carro) /* Função de set volvo protótipo de carro */


/* como carro tem sua prória velocidade máxima ele faz shadowing na velMax
porem ele faz a requisição de herança da função acelerar mais, que retorna o this.velMax,
referenciando sua própria velocidade máxima */
ferrari.acelerarMais(100)
console.log(ferrari.status())

/* já o volvo herda a velMax do objeto carro, e faz a requisição da velocidade máxima do objeto carro,
uma vez que ele não tem velocidade máxima própria.
O mecanismo que ele usa é super.status para chamar a função do objeto carro.
Porém mesmo que o volvo tivesse uma velMax < velMax do objeto carro, sua velocidade máxima
seria limitada corretamente, pois quem define o retorno da velocidade máxima é o objeto carro
que em sua função usa como referência o this.velMax, que por sua vez obriga a função a trabalhar no escopo
em que foi solicitada.   */
volvo.acelerarMais(300)
console.log(volvo.status())