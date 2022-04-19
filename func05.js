function calcula(){
var num1, num2, n1, n2, res, resposta

num1 = document.querySelector('input#num1')
console.log(num1)
num2 = document.querySelector('input.num2')
console.log(num2)

n1 = Number(num1.value)
n2 = Number(num2.value)

/*resposta = n1 + n2*/
resposta = soma(n1,n2)

res = document.getElementById('res')
res.innerHTML = resposta
res.style.backgroundColor = 'darkblue'
res.style.color = 'white'
res.style.fontSize = '18px'

console.log(res)

}

/*res = document.querySelector('p#res')*/
/*res.innerHTML = resposta*/

/*console.log(res)*/
/*}*/

/*function soma(a,b){
    return a + b*/
/*}*/

function soma(num1,num2){
    return num1 + num2
}

