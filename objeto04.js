const nome = document.querySelector('input#nome')
const idade = document.querySelector('input#idade')
const email = document.querySelector('input#email')
const res = document.getElementById('res')
let lista = []

/*console.log(nome, idade, email)

let valor = nome.value

console.log(valor)

nome.value = 'Jeferson'

valor = nome.value

console.log(valor)*/

function gravar(){
    /*let lista = []

    /*lista.push('José')
    lista.push('19')
    lista.push('jose@gmail.com')*/

   /* lista.push(nome.value)*/

   lista.push({
       nome: nome.value,
       idade: idade.value,
       email: email.value

   })

    console.log(lista)

    res.innerHTML += `Nome = ${nome.value}  Idade = ${idade.value}  e-mail = ${email.value}`
}