function rand([min= 0, max= 50]) {
    if (min>max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
console.log(rand([,45]))
console.log(rand([45]))
console.log(rand([]))