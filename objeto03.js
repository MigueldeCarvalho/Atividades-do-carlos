function person(título = 'recruta', corRoupa = 'verde', objeto = 'lanterna', calcado = 'bota', chapeu = 'boné'){
    return{
        título,
        corRoupa,
        objeto,
        calcado,
        chapeu,
        promover(){
            this.corRoupa = 'soldado'
            this.objeto = 'faca'
        },
        promover1(){
            this.título = 'sargento'
            this.objeto = 'pistola'
        },
        promover2(){
            this.título = 'tenente'
            this.objeto = 'AK47'
        }
    }
}

/*let soldado = person()
let sargento = person('Cavalaria', 'Azul', 'corda', 'bota', 'boné')
/*let soldado = person('Infantaria', 'verde', 'lanterna', 'bota', 'boné')*/

/*console.log(soldado)
console.log(sargento)
soldado.andar()
console.log(soldado)*/

let s1 = person()
let s2 = person()
let s3 = person()

s2.promover()
s3.promover2()
s1.promover1()

console.log(s2)
console.log(s3)
console.log(s1)



