// Operador e
/// Se v e v -> v, v e f -> f ou qualquer coisa diferente de verdadeiro e verdadeiro

// || -> Ou                           != -> diferente de 
// && -> e                            ! -> negação lógica

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV30 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTV30, comprarTV50, manterSaudavel }
}

console.log(compras(true, false))
console.log(compras(true, true))
console.log(compras(false, false))


