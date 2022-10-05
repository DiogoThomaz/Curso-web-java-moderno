//Criando objetos
const obj1 = {}

//Criando atributos dinamicamente para objetos de duas maneiras diferentes
obj1.nome = 'Bola'
obj1['Nome'] = 'Bola2'

console.log(obj1.nome)

//Função que recebe um parâmetro nome, esse parâmetro pode ser acessado usando . e retorna 
//o nome do objeto, é uma maneira de tornar público.
function Obj(nome) {
    this.nome = nome
    this.exe = function() {
        console.log('Executando...', nome)
    }
}

const obj2 = new Obj('Martelo')
const obj3 = new Obj('Furadeira')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exe()

