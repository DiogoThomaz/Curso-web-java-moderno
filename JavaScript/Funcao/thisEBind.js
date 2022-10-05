pt_BR = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}


en_US = {
    saudacao: 'Good Moorning!',
    falar() {
        console.log(this.saudacao)
    }
}

//This acessa os atributos da sua classe
pt_RS = {
    saudacao: 'Buenas Chê!',
    falar() {
        console.log(this.saudacao)
    }
}

pt_BR.falar()
pt_RS.falar()
en_US.falar()

//
function contador() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1*1000)
}

new contador