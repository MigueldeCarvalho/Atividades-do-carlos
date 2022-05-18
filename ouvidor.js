function criaPessoa(nome, idade, telefone){
    return{
        nome: nome,
        idade: idade,
        telefone: telefone

    }
}
const nome = document.querySelector('input#nome')
const idade = document.querySelector('input#idade')
const telefone = document.querySelector('input#telefone')
const grava = document.querySelector('button#grava')
const res = document.querySelector('div#res')

grava.addEventListener('click', gravar)

function gravar(){
    let nome1, idade1, telefone1, lista = []

    nome1 = nome.value
    idade1 = Number(idade.value)
    telefone1 = Number(telefone.value)

    lista.push(
        criaPessoa(nome1, idade1, telefone1)
    )

    /*console.log(nome1)
    console.log(idade1)
    console.log(telefone1)*/
    console.log(lista)



    res.innerHTML = ''
    res.innerHTML += `O ${nome1} tem ${idade1} anos e seu telefone é - ${telefone1}`


}