function rand({min = 0, max = 100}) {
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}


obj = {max: 50, min: 25}
console.log(rand(obj))
console.log(rand({max: 5}))
console.log(rand({}))