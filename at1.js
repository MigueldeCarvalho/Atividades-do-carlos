function calcularCosseno(){
    let angulo, converte, resposta, res
      
    angulo = Number(document.querySelector('.numero').value)
    console.log(angulo)
    console.log(typeof(angulo))
    
    converte = (angulo*Math.PI)/180
    console.log(converte)

    angulo = 30
    console.log(angulo)

    resposta = Math.cos(converte)
    console.log(resposta)

    res = document.querySelector('p#res')
    console.log(res)
    res.innerHTML += resposta.toFixed(2)

}

function calcularTangente(){
    let angulo, converte, resposta, res
      
    angulo = Number(document.querySelector('.numero2').value)
    console.log(angulo)
    console.log(typeof(angulo))
    
    converte = (angulo*Math.PI)/180
    console.log(converte)

    angulo = 30
    console.log(angulo)

    resposta = Math.tan(converte)
    console.log(resposta)

    res = document.querySelector('p#res2')
    console.log(res)
    res.innerHTML += resposta.toFixed(2)

}