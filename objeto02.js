/*const pessoa = {
    nome: 'Carlos' ,
    altura: 1.75
}*/

/*console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa.altura)

pessoa.altura = 1.78

console.log(pessoa.altura)*/

const personagem = {
    título: 'Soldado' ,
    objeto: 'corda' ,
    pontos: 10 ,
    corUniforme: 'verde' ,
    
    andar(){
        console.log(`${this.título} tem uma ${this.objeto} e está andando`)
    } ,
    parar(){
        console.log(`${this.título} possui ${this.objeto} e está parado`)

    },
    pegar(){
        this.objeto = 'botas'
    },
    largar(){
        this.objeto = ''
    }
}

console.log(personagem)
console.log(personagem.objeto)
personagem.objeto = 'lanterna'
console.log(personagem.objeto)
console.log(personagem)
personagem.pegar()
console.log(personagem)
personagem.largar()
console.log(personagem)












