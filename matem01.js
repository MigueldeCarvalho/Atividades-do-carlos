function calcular(){
    let angulo, converte, resposta
      
    angulo = Number(document.querySelector('.numero').value)
    console.log(angulo)
    console.log(typeof(angulo))

    converte = (47*Math.PI)/180
    console.log(converte)

    resposta = Math.cos(converte)
    console.log(resposta)






    /*numero = Math.cos(angulo)
    console.log(numero)*/
}