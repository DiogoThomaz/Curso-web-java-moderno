var pr_nft_bnb = 0.06
var minerios = ['garpen copper', 'iron', 'silver', 'ozymodium', 'stelar shard', 'craftting catalyst', 'combine catalyst']
var costs = [0.0083, 0.0165, 0.0228, 0.0789, 2.1352, 0.04, 0.0704]
var bnb_brl = 1501.5
var dar_brl = 1.29
const mensagem1 = 'Vale mais a pena no'
const mensagem2 = 'Economia de: '

function receita_do_craft(item) {
    if (item == 'min_1') {
       receita = ['1 x ' + minerios[6],'220 x ' + minerios[0]]
       return receita
    }
    if (item == 'min_2') {
        
    }
    if (item == 'min_3') {
        
    }
    if (item == 'min_4') {
        
    }
    if (item == 'min_5') {
        
    }
}

function calculadora_craft(item) {
    if (item == 'min_1') {
       var gasto = ((costs[5]) + (costs[0]*220) + 0.1)
        return gasto
     }
    if (item == 'min_2') {
       var gasto = ((2*costs[5]) + (costs[0]*100) + (costs[0]*250) + 0.1)
        return gasto
     }
     if (item == 'min_3') {
        var gasto = ((3*costs[5]) + (costs[0]*100) + (costs[2]*250) + 0.1)
         return gasto
      }
    if (item == 'min_4') {
       var gasto = ((3*costs[5]) + (costs[0]*880) + (costs[1]*200) + (costs[2]*200) + (costs[3]*200) + 0.1)
        return gasto
     }
    

}

function custo_do_craft(item, moeda = 'todas') {
    if (moeda == 'todas') {    
        let total_dar = calculadora_craft(item).toFixed(2) + 'DAR'
        let total_bnb = ((calculadora_craft(item)*dar_brl)/(bnb_brl)).toFixed(6) + 'BNB'
        let total_brl = (calculadora_craft(item)*dar_brl).toFixed(2) + 'BRL'
        return {total_bnb, total_brl, total_dar} }
    if (moeda == 'bnb') {
        let total_bnb = ((calculadora_craft(item)*dar_brl)/(bnb_brl)).toFixed(6) //+ 'BNB'
        return total_bnb
    }
    if (moeda == 'dar') {
        let total_dar = calculadora_craft(item).toFixed(2) //+ 'DAR'
        return total_dar
    }
    if (moeda == 'brl') {
        let total_brl = (calculadora_craft(item)*dar_brl).toFixed(2) //+ 'BRL'
        return total_brl
    }
}

function exibir_custo_do_craft (custo_do_craft, item, simbolo_moeda) {
    
    console.log(custo_do_craft(item, moeda ) + simbolo_moeda)
    
}

function craft_ou_comprar(item, marketplace) {
    if (custo_do_craft(item, 'bnb') > marketplace ) {
        let economia = ((marketplace - custo_do_craft(item, 'bnb'))*(-1)).toFixed(6)
        let economia_em_brl = (economia/bnb_brl).toFixed(10) + ' BRL'
        console.log(mensagem1 + 'marketplace')
        console.log(mensagem2 + economia_em_brl) 

    }
    if (custo_do_craft(item, 'bnb') < marketplace ) {
        let economia = ((custo_do_craft(item, 'bnb') - marketplace )*(-1)).toFixed(6)
        let economia_em_brl = (economia/bnb_brl).toFixed(10) + ' BRL' 
        console.log(mensagem1 + ' craft')
        console.log(mensagem2 + economia_em_brl)
    }
    }


var craft = receita_do_craft('min_3')
console.log(craft)

const custo_craft = calculadora_craft('min_3')
console.log(custo_craft)

exibir_custo_do_craft(custo_do_craft, 'min_1', 'bnb')
craft_ou_comprar('min_1', 1100.3)