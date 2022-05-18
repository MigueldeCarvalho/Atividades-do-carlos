function criaPedido(nome, quantidade, pizza){

    return{
        nome: nome,
        quantidade: quantidade,
        pizza: pizza
    }

}
const nome = document.querySelector('input.nome')
const quantidade = document.querySelector('input.quantidade')
const pizza = document.getElementById('pizza')
const confirma = document.querySelector('button#confirma')
const res = document.getElementById('res')
lista = []

confirma.addEventListener('click',gravar)

function gravar(){
    let nome2, quantidade2, pizza2
    
    nome2 = nome.value
    quantidade2 = Number(quantidade.value)
    pizza2 = pizza.value

    /*console.log(nome2)
    console.log(typeof(quantidade2))
    console.log(pizza2)*/

    lista.push(criaPedido(nome2, quantidade2, pizza2))

    console.log(lista)

    res.innerHTML += `${nome2} pediu a quantidade de ${quantidade2} pizza(s) de sabor ${pizza2}`
}