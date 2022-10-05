let isAtivo = true
console.log(isAtivo)


// ! representa a negação, ou o contrário. 
console.log(!isAtivo) 

// !! Quando se usa duas exclamações vc força algo a se comportar
//como verdadeiro ou falso
isAtivo = 1
console.log(isAtivo)
console.log(!!isAtivo)

// Valores que são verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 0)) //fica falso pq 0 false e 1 true

//valores que são falsos
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//Atribuir valor padrão de variável
//Como não foi definido o nome, retorna desconhecido
let nome = ""
console.log(nome || "Desconhecido") // || significa ou



 

