function calcular(){
    let valor, resultado, resposta
    const angulo = document.querySelector('input#angulo')
    console.log(angulo)
    const calcula = document.querySelector('button#calcula')
    console.log(calcula)
    const res = document.querySelector('p#res')
    console.log(resposta)

    calcula.addEventListener('click' , tangente)

    function tangente (){
       valor = Number(angulo.value)
       resultado = Math.tan((valor*Math.PI)/180).toFixed
       console.log(resultado)

       res.innerHTML += `A tangente de <strong> ${valor}° </strong> é = ${resultado}`

    }

    


    



}

calcular()

