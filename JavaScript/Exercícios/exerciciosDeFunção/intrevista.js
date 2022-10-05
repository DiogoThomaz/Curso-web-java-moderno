const conhecimento = 1
const temConhecimentoOuNao = conhecimento ? 'sim': 'não'
setInterval(() => {
    console.log(temConhecimentoOuNao)
}, 1000);