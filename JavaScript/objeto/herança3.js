/*  HERANÇA 3 */
/*   uma maneira diferente de criar uma herança.
     na aula passada criei um objeto usando __proto__, já nessa aula vou criar uma
     herança atráves da função Object.create()*/

const pai = {
    nome: 'Carlos',
    corCabelo: 'Preto'
}

/*  Consideração de criar um objeto a partir de outro */
/*  filha 1 é criada copiando o objeto pai*/
const filha1 = Object.create(pai)
/* reescrevendo o nome da filha, já que seu nome original era igual ao do pai */
filha1.nome='Ana'
/* filha 1 não esta com sua cor de cabelo definida, essa informação só sera exibida se 
explicitamente solicitada*/
console.log(filha1)
/* aqui a cor do cabelo é explicitamente solicitada */
console.log(filha1, filha1.corCabelo)
/* prova de que a filha1 não tem a chave corCabelo*/
console.log(Object.keys(filha1))


/* Considerações de criar um objeto a partir de outro com parâmetros definidos */
/* Parâmetros são passados na hora da criação do objeto filha2
   value --> valor do nome
   writable --> se o parâmetro pode ser sobreescrito ou não
   enumerable --> se o parâmetro pode ser listado ou não para ser lido*/
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})
/* O objeto filha não tem a key cor do cabelo também, assim como a filha1 */
console.log(Object.keys(filha2))
/* Como sabe se a filha2 é a dona da key ou se ela veio por herança */
for (let key in filha2) {
    filha2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`Por herança: ${key}`)
}

//Se verdadeiro print sim, se falso print não
2 == 3 ? 
console.log('sim') : console.log('não')
