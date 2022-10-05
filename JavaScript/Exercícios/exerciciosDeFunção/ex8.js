/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
 */

const pontosPedro = [50,55,30,0,48,58,50,50,60,3]
let i = 1
let partidaAnterior = 0
function analisePontosDoPedro(pontosPedro){
    pontosPedro.forEach(p => {
        let partidaAtual = p
        if (partidaAnterior > partidaAtual) {
            console.log(i + ')partida')
            console.log(`Fez ${partidaAtual}pts nessa partida e ${partidaAnterior}pts na passada`)
            console.log('logo mais pontos na partida anterior')
            console.log('\n')
        }
        if (partidaAnterior  < partidaAtual) {
            console.log(i + ') partida')
            console.log(`Fez ${partidaAtual}pts nessa partida e ${partidaAnterior}pts na passada`)
            console.log('Fez mais pontos na partida atual')
            console.log('\n')
        }
        if (partidaAnterior === partidaAtual) {
            console.log(i + ') partida')
            console.log(`Fez ${partidaAtual}pts nessa partida e ${partidaAnterior}pts na passada`)
            console.log('Fez mesma pontuação da partida anterior')
            console.log('\n')
        }
        partidaAnterior = partidaAtual
        i++
    })
}

analisePontosDoPedro(pontosPedro)